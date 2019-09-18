/**
 * Sends emails with data from the current spreadsheet.
 */
function sendEmails() {
  var sheet = SpreadsheetApp.getActiveSheet();
  // Fetch values for each row in the Range.
  var data = sheet.getDataRange().getValues();
  for (var i = 0; i < data.length; i++) {
    Logger.log(data[i]);
    Logger.log(i);
    var row = i;
    var emailAddress = data[row][0].toString(); // First column
    var message = data[row][1]; // Second column
    var subject = 'Sending emails from a Spreadsheet';
    Logger.log(emailAddress);
    if (emailAddress.indexOf("@") > 0) {
            MailApp.sendEmail(emailAddress, subject, message);
    } else { 
      Logger.log("here's what's not working: " + emailAddress + " " + subject + " " + message);
    }
  }
}
