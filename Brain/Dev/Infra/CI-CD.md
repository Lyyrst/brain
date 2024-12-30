#gitlab

It aims to automate and optimize the phases of building, testing, and deploying an application. With CI/CD, teams can deliver code reliably, quickly, and continuously.

## What is CI/CD?

**Continuous Integration (CI):**  
CI involves regularly integrating changes into a shared codebase. Each change is automatically tested to quickly detect and fix any issues.

**Continuous Deployment (CD):**  
CD automates the delivery of validated changes to intermediate or production environments, minimizing human errors and speeding up production releases.

## Key Stages of a CI/CD Pipeline

1. **Build:**  
    Compiling the code and generating artifacts.  
    
2. **Test:**  
    Running tests such as [[Automated Testing]] or [[Non-regression test]].
    
3. **Release:**  
    Preparing the delivery (e.g., generating a Docker image).
    
4. **Deploy:**  
    Deploying to a target environment (staging, production).
    
5. **Monitoring (optional):**  
    Post-deployment monitoring to detect any potential issues.

>[!documentation]- documentation
>https://docs.gitlab.com/ee/ci/