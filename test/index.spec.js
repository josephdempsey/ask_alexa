'use strict';
// include the testing framework
const alexaTest = require('alexa-skill-test-framework');
const mysqlConnection = require('../utils/mysqlConnection');

// initialize the testing framework
alexaTest.initialize(
	require('../index'),
	"amzn1.ask.skill.00000000-0000-0000-0000-000000000000",
	"amzn1.ask.account.VOID");

describe("Skill", function () {
	describe("LaunchRequest", function () {
        alexaTest.test([
			{
				request: alexaTest.getLaunchRequest(),
				says: "Welcome to the Cloudmargin. You are logged into client demo", repromptsNothing: false, shouldEndSession: false
			}
		]);
	});

	describe("MarginCallsIntent", function () {
        alexaTest.test([
			{
				request: alexaTest.getLaunchRequest(),
				says: "You have 161 margin calls that require your attention today", repromptsNothing: false, shouldEndSession: false
			}
		]);
	});
});