const inquiryCountElement = document.querySelector("#inquiryCount");
const thanksHeading = document.querySelector("#thanksHeading");
const thanksMessage = document.querySelector("#thanksMessage");
const inquiryStorageKey = "tripInquiryCount";

function incrementInquiryCount() {
  if (!inquiryCountElement) {
    return;
  }

  const currentCount = Number(localStorage.getItem(inquiryStorageKey)) || 0;
  const updatedCount = currentCount + 1;

  localStorage.setItem(inquiryStorageKey, updatedCount);
  inquiryCountElement.textContent = updatedCount;
}

function personalizeConfirmation() {
  const parameters = new URLSearchParams(window.location.search);
  const travelerName = parameters.get("travelerName");
  const groupType = parameters.get("groupType");

  if (!thanksHeading || !thanksMessage) {
    return;
  }

  if (travelerName && groupType) {
    thanksHeading.textContent = `Thanks, ${travelerName}.`;
    thanksMessage.textContent = `Your ${groupType} trip inquiry has been recorded, and your Costa Rica planning notes are ready for the next step.`;
    return;
  }

  thanksMessage.textContent = "Your trip inquiry has been recorded, and your planning details were sent successfully.";
}

incrementInquiryCount();
personalizeConfirmation();
