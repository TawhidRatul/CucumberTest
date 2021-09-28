Feature: Login to an e-commerce website

  Scenario Outline: Verify users can login to portal with valid credentials
    Given User visits e-commerce website
    When User enters valid "<username>" and valid "<password>"
    Then User can logged in successfully

    Examples:
      | username           | password |
      | ahmed.tawhid005@gmail.com | alvi001 |

  Scenario Outline: Verify users cannot login to portal without valid credentials
    Given User visits e-commerce website
    When User enters invalid "<username>" and invalid "<password>"
    Then User can not logged in successfully

    Examples:
      | username           | password |
      | ahmed.tawhid678@gmail.com | alvi009 |


