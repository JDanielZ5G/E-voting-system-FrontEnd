# Testing Strategy

## 1. Critical Paths to Test
These paths MUST be tested to ensure the integrity of the election.

### A. Voter Verification (Integration Test)
*   **Goal**: Ensure only eligible voters can get a ballot token.
*   **Steps**:
    1.  Mock `EligibleVoters` table with a test user.
    2.  Call `POST /verify/request-otp`.
    3.  Verify OTP is generated (mocked).
    4.  Call `POST /verify/confirm` with correct OTP.
    5.  **Expect**: 200 OK + `ballot_token`.
    6.  Call `POST /verify/confirm` again.
    7.  **Expect**: 400 Bad Request (Token already issued).

### B. Double Voting Prevention (Unit/Integration Test)
*   **Goal**: Ensure a ballot token can only be used once.
*   **Steps**:
    1.  Generate a valid `ballot_token`.
    2.  Call `POST /vote` with valid choices.
    3.  **Expect**: 200 OK.
    4.  Call `POST /vote` again with SAME token.
    5.  **Expect**: 403 Forbidden (Token invalid/consumed).

### C. Secret Ballot (Database Inspection Test)
*   **Goal**: Ensure no link exists between Voter ID and Vote Choice.
*   **Steps**:
    1.  Cast a vote.
    2.  Query the `Votes` table.
    3.  **Expect**: `voter_id` column should NOT exist or be NULL.
    4.  Query `Ballots` table.
    5.  **Expect**: `voter_id` exists (for audit), but NO link to `Votes` table other than through `ballot_id` (which should be anonymized or one-way). *Note: In our schema, Vote links to Ballot. To ensure secrecy, the link between Voter and Ballot should be protected or the Ballot ID should be randomized/detached from the Voter's identity in the Vote record if absolute secrecy is required. Ideally, `Ballots` tracks WHO voted, `Votes` tracks WHAT was voted, and the link is only temporal.*

## 2. Test Tools
*   **Unit Tests**: `Jest`
*   **Integration Tests**: `Supertest` + `Jest`
*   **E2E Tests**: `Cypress` (Frontend + Backend)
*   **Load Testing**: `k6` (Simulate 500 users)

## 3. Sample Test Case (Jest)
```typescript
describe('POST /vote', () => {
  it('should prevent double voting', async () => {
    const token = await generateToken();
    
    // First Vote
    const res1 = await request(app)
      .post('/api/vote')
      .set('Authorization', `Bearer ${token}`)
      .send({ votes: [...] });
    expect(res1.status).toBe(200);

    // Second Vote
    const res2 = await request(app)
      .post('/api/vote')
      .set('Authorization', `Bearer ${token}`)
      .send({ votes: [...] });
    expect(res2.status).toBe(403);
  });
});
```
