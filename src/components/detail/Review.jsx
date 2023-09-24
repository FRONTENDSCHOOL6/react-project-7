import React, { useRef, useState, useEffect } from "react";
import pb from "@/api/pocketbase";
import PocketBase from "pocketbase";
import { string } from "prop-types";
import S from "../detail/Contents.module.css";
import ReviewItem from "../detail/EditReview";

export default function ReviewSection({ id, contentType }) {
	const [stars, setStars] = useState(0);
	const [hoverRating, setHoverRating] = useState(0);

	const [reviewText, setReviewText] = useState("");
	const [reviews, setReviews] = useState([]);
	const [editingReviewIndex, setEditingReviewIndex] = useState(null);

	const [comment, setComment] = useState([]);
	const [editedComment, setEditedComment] = useState("");

	const formref = useRef(null);

	const handleReviewChange = (e) => {
		if (editingReviewIndex !== null) {
			setEditedComment(e.target.value);
		} else {
			setReviewText(e.target.value);
		}
	};

	useEffect(() => {
		const fetchReviews = async () => {
			try {
				const data = await pb
					.collection(contentType)
					.getOne(id, { expand: "reviews,reviews.writer" });
				if (data?.expand?.reviews) {
					setReviews(data.expand.reviews);
				}
			} catch (error) {
				console.error("Failed to fetch reviews", error);
			}
		};

		fetchReviews();
	}, [id, contentType]);

	const handleReviewSubmit = async (e) => {
		e.preventDefault();

		const userFromLocalStorage = JSON.parse(
			localStorage.getItem("pocketbase_auth") || "{}"
		);
		const userId = userFromLocalStorage?.model?.id;
		if (stars === 0) {
			alert("별점을 설정해주세요.");
			return;
		}

		if ((reviewText !== "" || editedComment !== "") && stars !== null) {
			try {
				let reviewData;
				if (editingReviewIndex !== null) {
					reviewData = {
						text: editedComment,
						stars: stars.toString(),
					};
				} else {
					reviewData = {
						text: reviewText,
						stars: stars.toString(),
					};
				}

				let data = {
					star: reviewData.stars,
					writer: userId,
					contents: reviewData.text,
					programId: id,
				};

				let record = await pb.collection("review").create(data);

				if (record) {
					await pb.collection("users").update(userId, { "review+": record.id });
					await pb
						.collection(contentType)
						.update(data.programId, { "reviews+": record.id });
				}

				let newData = await pb
					.collection("review")
					.getOne(record.id, { expand: "writer, reviews.writer" });

				setReviews((prev) => [...prev, newData]);
			} catch (error) {
				console.error(error);
			}
		}
	};
	{
		return (
			<section className={S.reviewSection}>
				<hr className="border-gray400 pt-[15px]" />
				<span className={`mb-[0.9375rem]  ${S.sectionTitle}`}>Review</span>
				<div className={S.reviewBox}>
					<form onSubmit={handleReviewSubmit} className={S.reviewForm}>
						{[...Array(5)].map((star, i) => {
							const ratingValue = i + 1;
							return (
								<span
									key={i}
									className={`${S["starIcon"]} ${
										ratingValue <= (hoverRating || stars) ? S["active"] : ""
									}`}
									onMouseEnter={() => setHoverRating(ratingValue)}
									onMouseLeave={() => setHoverRating(stars)}
									onClick={() => setStars(ratingValue)}
								>
									★
								</span>
							);
						})}
						<input
							className={S.reviewInput}
							value={reviewText}
							ref={formref}
							onChange={handleReviewChange}
						></input>
						<button className={S.reviewButton} type="submit">
							리뷰 제출
						</button>
					</form>
				</div>
				<div>
					<ul className="">
						{reviews.map((item) => {
							return (
								<ReviewItem
									key={item.id}
									star={item.star}
									writer={item.expand.writer.username}
									writerId={item.expand.writer.id}
									comment={item.contents}
									commentId={item.id}
									onCommentChange={setComment}
								/>
							);
						})}
					</ul>
				</div>
			</section>
		);
	}
}
ReviewSection.propTypes = {
	id: string.isRequired,
	contentType: string.isRequired,
};
