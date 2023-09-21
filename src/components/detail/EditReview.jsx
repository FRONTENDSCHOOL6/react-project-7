import React, { useRef, useState, useEffect } from "react";
import pb from "@/api/pocketbase";
import PocketBase from "pocketbase";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import CurrentTime from "../search/util/CurrentTime";

export default function ReviewItem({
	star = "별점",
	writer = "글쓴이",
	comment = "리뷰",
	commentId,
}) {
	const [isEditMode, setIsEditMode] = useState(false);
	const [isRemoved, setIsRemoved] = useState(false);
	const [editedComment, setEditedComment] = useState(comment);
	const [realComment, setRealComment] = useState(comment);

	const handleDeleteClick = () => {
		setIsRemoved(true);
	};

	const handleCancelClick = () => {
		setIsEditMode(false);
		setEditedComment(realComment);
	};

	const handleEditClick = () => {
		setIsEditMode(true);
	};
	const handleSave = async (commentId) => {
		if (!isEditMode) return;

		const updateData = {
			contents: editedComment,
		};

		try {
			await pb.collection("review").update(commentId, updateData);
			setIsEditMode(false);
			setRealComment(editedComment);
		} catch (error) {
			throw new Error(error.message);
		}
	};

	return (
		<>
			{!isRemoved ? (
				<div className=" text-white  w-[50%] rounded-[0.3em] border-solid pl-[1rem] pt-[0.625rem] mt-[0.625rem] ml-[3rem]">
					<div>
						{Array.from({ length: star }, (_, index) => (
							<span key={index}>⭐</span>
						))}
					</div>
					<div className=" flex row">
						{writer} &nbsp;:&nbsp;
						{isEditMode ? (
							<input
								className="text-[gray]"
								type="text"
								value={editedComment}
								onChange={(e) => setEditedComment(e.target.value)}
							/>
						) : (
							<div className="">{editedComment}</div>
						)}

						{isEditMode && (
							<div className=" cursor-pointer ">
								<ul className="flex row">
									<li className=" ml-[0.3125rem] mt-[0.2em]">
										<button onClick={() => handleSave(commentId)}>수정</button>
									</li>
									<li className=" ml-[0.3125rem] mt-[0.2em]">
										<button onClick={handleCancelClick}>취소</button>
									</li>
								</ul>
							</div>
						)}
						{!isEditMode && (
							<>
								<span
									onClick={handleEditClick}
									className="cursor-pointer text-sm text-[gray] ml-[0.3125rem] mt-[0.2em]  rounded-[0.3em]"
								>
									수정
								</span>

								<span
									onClick={handleDeleteClick}
									className="cursor-pointer ml-[0.3125rem] mt-[0.2em]  rounded-[0.3em] text-sm text-red-500"
								>
									삭제
								</span>
							</>
						)}
					</div>
				</div>
			) : (
				<>
					<p className=" pl-[1rem] pt-[0.625rem] mt-[1rem] ml-[3rem]">
						관리자만 접근이 가능합니다.
					</p>
				</>
			)}
		</>
	);
}

ReviewItem.propTypes = {
	star: PropTypes.number.isRequired,
	writer: PropTypes.string.isRequired,
	comment: PropTypes.string.isRequired,
	commentId: PropTypes.string.isRequired,
};
