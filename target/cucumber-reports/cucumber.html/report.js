$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri(" login.feature");
formatter.feature({
  "name": "Login to an e-commerce website",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Verify users can login to portal with valid credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User visits e-commerce website",
  "keyword": "Given "
});
formatter.step({
  "name": "User enters valid \"\u003cusername\u003e\" and valid \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User can logged in successfully",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "ahmed.tawhid005@gmail.com",
        "alvi001"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify users can login to portal with valid credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User visits e-commerce website",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.user_visits_e_commerce_website()"
});
formatter.result({
  "error_message": "java.lang.IllegalStateException: The path to the driver executable must be set by the webdriver.gecko.driver system property; for more information, see https://github.com/mozilla/geckodriver. The latest version can be downloaded from https://github.com/mozilla/geckodriver/releases\r\n\tat com.google.common.base.Preconditions.checkState(Preconditions.java:847)\r\n\tat org.openqa.selenium.remote.service.DriverService.findExecutable(DriverService.java:134)\r\n\tat org.openqa.selenium.firefox.GeckoDriverService.access$100(GeckoDriverService.java:44)\r\n\tat org.openqa.selenium.firefox.GeckoDriverService$Builder.findDefaultExecutable(GeckoDriverService.java:167)\r\n\tat org.openqa.selenium.remote.service.DriverService$Builder.build(DriverService.java:355)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.toExecutor(FirefoxDriver.java:190)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:147)\r\n\tat StepDefinitions.user_visits_e_commerce_website(StepDefinitions.java:26)\r\n\tat ✽.User visits e-commerce website( login.feature:4)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User enters valid \"ahmed.tawhid005@gmail.com\" and valid \"alvi001\"",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User can logged in successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.user_can_logged_in_successfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "name": "Verify users cannot login to portal without valid credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User visits e-commerce website",
  "keyword": "Given "
});
formatter.step({
  "name": "User enters invalid \"\u003cusername\u003e\" and invalid \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User can not logged in successfully",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "ahmed.tawhid678@gmail.com",
        "alvi009"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify users cannot login to portal without valid credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User visits e-commerce website",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.user_visits_e_commerce_website()"
});
formatter.result({
  "error_message": "java.lang.IllegalStateException: The path to the driver executable must be set by the webdriver.gecko.driver system property; for more information, see https://github.com/mozilla/geckodriver. The latest version can be downloaded from https://github.com/mozilla/geckodriver/releases\r\n\tat com.google.common.base.Preconditions.checkState(Preconditions.java:847)\r\n\tat org.openqa.selenium.remote.service.DriverService.findExecutable(DriverService.java:134)\r\n\tat org.openqa.selenium.firefox.GeckoDriverService.access$100(GeckoDriverService.java:44)\r\n\tat org.openqa.selenium.firefox.GeckoDriverService$Builder.findDefaultExecutable(GeckoDriverService.java:167)\r\n\tat org.openqa.selenium.remote.service.DriverService$Builder.build(DriverService.java:355)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.toExecutor(FirefoxDriver.java:190)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:147)\r\n\tat StepDefinitions.user_visits_e_commerce_website(StepDefinitions.java:26)\r\n\tat ✽.User visits e-commerce website( login.feature:13)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User enters invalid \"ahmed.tawhid678@gmail.com\" and invalid \"alvi009\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.user_enters_invalid_and_invalid(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User can not logged in successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.user_can_not_logged_in_successfully()"
});
formatter.result({
  "status": "skipped"
});
});