import React, { useRef, useState, useEffect } from "react";
import pb from "@/api/pocketbase";
import { string, number } from "prop-types";
import S from "../detail/Contents.module.css";

export default function ReviewItem({
	star = "별점",
	writer = "글쓴이",
	comment = "리뷰",
	commentId,
	writerId,
}) {
	const [isEditMode, setIsEditMode] = useState(false);
	const [isRemoved, setIsRemoved] = useState(false);

	const [editedComment, setEditedComment] = useState(comment);
	const [realComment, setRealComment] = useState(comment);

	const userFromLocalStorage = JSON.parse(
		localStorage.getItem("pocketbase_auth") || "{}"
	);
	const currentUserId = userFromLocalStorage?.model?.id;

	const handleDeleteClick = async () => {
		console.log(currentUserId, writerId);
		if (currentUserId !== writerId) {
			alert("본인의 리뷰만 삭제할 수 있습니다.");
			return;
		}

		try {
			await pb.collection("review").delete(commentId);
			setIsRemoved(true);
		} catch (error) {
			console.error(error);
		}
	};

	const handleEditClick = () => {
		if (currentUserId !== writerId) {
			alert("본인의 리뷰만 수정할 수 있습니다.");
			return;
		}

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
				<div className={S.editItem}>
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
								</ul>
							</div>
						)}
						{!isEditMode && (
							<>
								<span
									onClick={handleEditClick}
									className={`${S.deleteBtn} text-[gray]`}
								>
									수정
								</span>

								<span
									onClick={handleDeleteClick}
									className={`${S.deleteBtn} text-red-500`}
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
	star: number.isRequired,
	writer: string.isRequired,
	comment: string.isRequired,
	commentId: string.isRequired,
	writerId: string.isRequired,
};
