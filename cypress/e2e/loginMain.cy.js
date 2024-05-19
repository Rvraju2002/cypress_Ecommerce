import login from "../SpilittedCodes/loginSpilittedCodes.cy";

describe("LoginFlow", function () {
	it("loginIntoAccount", function () {
		const l = new login();
		l.goLoginPage();
		l.fillUpCredential("Vignesh@ngfot.com", "1234567");
		l.submitForm();
	});
});
