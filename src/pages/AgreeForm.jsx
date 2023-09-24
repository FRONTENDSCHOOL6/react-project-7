import { useState } from "react";
import grayCheck from "/assets/small-gray-check.svg";
import redCheck from "/assets/small-red-check.svg";
import grayCircleCheck from "/assets/gray-check1.svg";
import redCircleCheck from "/assets/red-check.svg";

function AgreementForm() {
	const [isAgreeChecked, setIsAgreeChecked] = useState(false);
	const [individualAgreements, setIndividualAgreements] = useState({
		ageAgreement: false,
		serviceAgreement: false,
		privacyAgreement: false,
		optionalAgreement1: false,
		optionalAgreement2: false,
		pushNotification: false,
		emailNotification: false,
		smsNotification: false,
	});

	const agreementsText = {
		ageAgreement: "만 14세 이상입니다.",
		serviceAgreement: "서비스 이용약관 동의",
		privacyAgreement: "개인정보 수집 및 이용 동의",
		optionalAgreement1: "[선택] 개인정보 수집 및 이용 동의",
		optionalAgreement2: "[선택] 마케팅 정보 수신 동의",
		pushNotification: "푸시 알림",
		emailNotification: "이메일",
		smsNotification: "SMS",
	};

	// "필수 및 선택 항목을 모두 포함하여 동의합니다" 항목 클릭 시
	const handleAgreeConfirm = () => {
		const allChecked = !isAgreeChecked;
		setIsAgreeChecked(allChecked);

		// 모든 동의 항목 업데이트
		setIndividualAgreements((prevAgreements) => {
			const updatedAgreements = {};
			for (const key in prevAgreements) {
				updatedAgreements[key] = allChecked;
			}
			return updatedAgreements;
		});
	};

	// 각 동의 항목 클릭 시
	const handleAgreeChecked = (agreement) => {
		setIndividualAgreements((prevAgreements) => ({
			...prevAgreements,
			[agreement]: !prevAgreements[agreement],
		}));

		// [선택] 마케팅 정보 수신 동의 항목 체크 시
		if (agreement === "optionalAgreement2") {
			if (individualAgreements["optionalAgreement2"]) {
				// [선택] 마케팅 정보 수신 동의 항목이 체크되면 푸시 알림, 이메일, SMS 모두 체크합니다.
				setIndividualAgreements((prevAgreements) => ({
					...prevAgreements,
					pushNotification: false,
					emailNotification: false,
					smsNotification: false,
				}));
			} else {
				// [선택] 마케팅 정보 수신 동의 항목이 해제되면 푸시 알림, 이메일, SMS 모두 해제합니다.
				setIndividualAgreements((prevAgreements) => ({
					...prevAgreements,
					pushNotification: true,
					emailNotification: true,
					smsNotification: true,
				}));
			}
		}

		// "필수 및 선택 항목을 모두 포함하여 동의합니다" 항목 업데이트
		const allChecked = Object.values(individualAgreements).every(
			(value) => value
		);
		setIsAgreeChecked(allChecked);
	};

	// 모든 동의 항목이 체크되어야 가입 가능
	const isFormValid = () => {
		return Object.values(individualAgreements).every((value) => value);
	};

	return (
		<div>
			{/* "필수 및 선택 항목을 모두 포함하여 동의합니다" 항목 */}
			<div className="pt-6 text-gray400">
				<span className="flex pb-2" onClick={handleAgreeConfirm}>
					<img
						src={isAgreeChecked ? redCircleCheck : grayCircleCheck}
						alt="자동 로그인"
						className="pr-3 cursor-pointer"
					/>
					<p className="font-bold text-lg">
						필수 및 선택 항목을 모두 포함하여 동의합니다.
					</p>
				</span>
				{/* 각 동의 항목 */}
				{Object.entries(individualAgreements).map(([agreement, isChecked]) => (
					<span className="flex" key={agreement}>
						<img
							src={isChecked ? redCheck : grayCheck}
							alt={`약관동의 체크 - ${agreement}`}
							onClick={() => handleAgreeChecked(agreement)}
							className="right-1/5 pr-3 cursor-pointer"
						/>
						<p>
							{agreement === "serviceAgreement" ||
							agreement === "privacyAgreement"
								? `[필수] ${agreementsText[agreement]}`
								: agreementsText[agreement]}
						</p>
					</span>
				))}
			</div>
			{/* 가입 버튼 */}
			<button
				type="submit"
				disabled={!isFormValid()}
				className={`h-16 bg-gray700 font-bold text-white login-button w-full rounded-sm ${
					isFormValid()
						? "bg-gray700 dark:hover:bg-[#cc1030] cursor-pointer"
						: "bg-gray700 cursor-not-allowed"
				}`}
			>
				가입하기
			</button>
		</div>
	);
}

export default AgreementForm;
