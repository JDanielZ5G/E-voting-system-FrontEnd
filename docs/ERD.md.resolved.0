# Entity Relationship Diagram (ERD)

```mermaid
erDiagram
    POSITIONS ||--|{ CANDIDATES : "has"
    POSITIONS ||--|{ VOTES : "receives"
    ELIGIBLE_VOTERS ||--o| VERIFICATIONS : "requests"
    ELIGIBLE_VOTERS ||--o| BALLOTS : "issued"
    VERIFICATIONS ||--|| BALLOTS : "authorizes"
    BALLOTS ||--|{ VOTES : "contains"
    CANDIDATES ||--|{ VOTES : "receives"

    POSITIONS {
        int id PK
        string name
        int seats
        datetime opens_at
        datetime closes_at
    }

    CANDIDATES {
        int id PK
        int position_id FK
        string name
        string manifesto_url
        string photo_url
        string status "SUBMITTED|APPROVED|REJECTED"
        string reason
        datetime created_at
    }

    ELIGIBLE_VOTERS {
        int id PK
        string reg_no UK
        string name
        string email
        string phone
        string program
        string status "ELIGIBLE|BLOCKED"
    }

    VERIFICATIONS {
        int id PK
        int voter_id FK
        string method "EMAIL|SMS"
        string otp_hash
        datetime issued_at
        datetime verified_at
        string ballot_token UK
        datetime consumed_at
    }

    BALLOTS {
        int id PK
        int voter_id FK
        int election_id
        datetime issued_at
        datetime consumed_at
    }

    VOTES {
        int id PK
        int ballot_id FK
        int position_id FK
        int candidate_id FK
        datetime cast_at
    }

    AUDIT_LOGS {
        int id PK
        string actor_type
        string actor_id
        string action
        string entity
        string entity_id
        json payload
        datetime created_at
    }
```
