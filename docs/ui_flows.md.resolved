# UI Level Flow Charts

## 1. Voter Journey
```mermaid
flowchart TD
    A[Landing Page] --> B{Has Token?}
    B -- Yes --> D[Ballot Screen]
    B -- No --> C[Verification Screen]
    
    C --> C1[Enter Reg No]
    C1 --> C2{Valid?}
    C2 -- No --> C1
    C2 -- Yes --> C3[Enter OTP]
    C3 --> C4{Correct?}
    C4 -- No --> C3
    C4 -- Yes --> D
    
    D --> E[Select President]
    E --> F[Select Secretary]
    F --> G[Review Choices]
    G --> H{Confirm?}
    H -- No --> D
    H -- Yes --> I[Submit Vote]
    I --> J[Success Screen]
    J --> K[View Live Results]
```

## 2. Admin Journey
```mermaid
flowchart TD
    A[Admin Login] --> B[Dashboard]
    B --> C{Action?}
    
    C -- Manage Positions --> D[Positions List]
    D --> D1[Create Position]
    D --> D2[Edit/Delete]
    
    C -- Approvals --> E[Candidate Approvals]
    E --> E1[View Manifesto]
    E1 --> E2{Decision}
    E2 -- Approve --> E3[Update Status]
    E2 -- Reject --> E4[Enter Reason]
    
    C -- Reports --> F[View Reports]
    F --> F1[Live Turnout]
    F --> F2[Export PDF/CSV]
```
