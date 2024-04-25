class Solution:
    def longestIdealString(self, s: str, k: int) -> int:
        n = len(s)
        dp = [0] * n
        last_occurrence = [-1] * 26

        for i in range(n):
            dp[i] = 1
            for j in range(max(0, ord(s[i]) - ord('a') - k), min(26, ord(s[i]) - ord('a') + k + 1)):
                if last_occurrence[j] != -1:
                    dp[i] = max(dp[i], dp[last_occurrence[j]] + 1)
            last_occurrence[ord(s[i]) - ord('a')] = i

        return max(dp)
