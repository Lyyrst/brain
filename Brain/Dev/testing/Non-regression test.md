#testing
## Overview
Non-regression testing ensures that new changes to a software application (such as updates, enhancements, or bug fixes) do not negatively affect existing functionality. The primary goal is to validate that previously developed and tested features still work as expected after modifications.

---

## Objectives
1. **Preserve Existing Functionality**: Ensure that no unintended changes or bugs are introduced.
2. **Improve Confidence in Code Changes**: Verify that updates maintain the integrity of the application.
3. **Support Continuous Delivery**: Facilitate rapid and reliable software releases.

---

## Types of Non-Regression Tests
1. **[[Manual Testing]]**:
   - Performed by testers using predefined test cases.
   - Suitable for exploratory testing or small-scale projects.

2. **[[Automated Testing]]**:
   - Uses tools like Selenium, [[JUnit]]  to execute test cases automatically.
   - Ideal for repetitive and large-scale tests.

---

## Steps in Non-Regression Testing
1. **Identify Test Scenarios**:
   - Focus on critical and frequently used functionalities.
2. **Create/Update Test Cases**:
   - Include scenarios that cover edge cases, business rules, and common user interactions.
3. **Execute Tests**:
   - Run manual or automated tests on the updated codebase.
4. **Analyze Results**:
   - Compare outcomes with expected results to detect regressions.
5. **Fix and Retest**:
   - Address issues and retest to confirm fixes.

---

## Best Practices
- **Automate Repetitive Tests**: Use automated tools to save time and reduce human errors.
- **Prioritize Critical Areas**: Focus testing efforts on high-risk and high-impact functionalities.
- **Integrate with [[CI-CD]] [[Pipelines]]**: Automate non-regression testing within the development workflow for continuous feedback.
- **Maintain Test Cases**: Regularly review and update test cases to align with evolving application requirements.

