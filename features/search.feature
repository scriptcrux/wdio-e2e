Feature: Search Functionality
    @current
    Scenario Outline: To verify search Functionality
        Given google search page is opened
        # When Search with <SearchTerm>
        # And Click on first search result
        # Then The URL should match <ExpectedResult>

        Examples:
            |Test_ID |  SearchItem |  ExpectedResult       |
            | TC_01  |  WDIO       | https://webdriver.io/ |