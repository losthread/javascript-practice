// instead of .then and .catch which just looks ugly
// we can use await and try catch error handling
// to make the syntax cleaner
// syntactical sugar for promises

// waits for a promise to resolve

try {
  const message = await updateMessageStatus("M123", "Sending", true);
  console.log(message);
} 
catch (err) {
  console.log("Error:", err);
}
console.log(message);

function updateMessageStatus(messageId, currentStatus, isDelivered) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (currentStatus === "Sending") {
        if (isDelivered) {
          resolve(
            `Textio Message ${messageId} has been delivered successfully.`,
          );
        } else {
          reject(
            `Textio Message ${messageId} is still sending and cannot be marked as delivered.`,
          );
        }
      } else {
        resolve(
          `Textio Message ${messageId} status updated to ${currentStatus}.`,
        );
      }
    }, 1000);
  });
}
