import { Capacitor } from '@capacitor/core';
import { InAppReview } from '@capacitor-community/in-app-review';

/**
 * Google Play In-App Review API wrapper.
 *
 * Shows the standard Play Store review dialog without leaving the app.
 * Google limits how often the dialog can appear — it will silently no-op
 * if the user has already reviewed or the quota is exceeded.
 *
 * Trigger strategy: called after level 6 completion (the second cycle
 * through the level sequence), then every 10th level thereafter.
 * This gives users time to form a genuine opinion before being prompted.
 */
const Review = {
  /**
   * The level indices at which to attempt showing the review dialog.
   * Level 6 = second cycle through the 6-mode sequence.
   * Subsequent prompts every 10 levels to stay within review quotas.
   */
  REVIEW_LEVELS: new Set([6, 16, 26, 36, 46, 56, 66]),

  /**
   * Attempt to show the Google Play In-App Review dialog.
   *
   * This is a best-effort call — Google may decide not to show the dialog
   * based on internal quotas, user history, or device state.
   * The method does NOT throw; failures are silently caught.
   *
   * @returns true if the dialog was shown, false otherwise
   */
  requestReview: async (): Promise<boolean> => {
    // Only works on native Android (Google Play build)
    if (!Capacitor.isNativePlatform()) {
      console.log('[Review] Skipping — not on native platform');
      return false;
    }

    try {
      const result = await InAppReview.requestReview();
      // value: 'shown' | 'not_shown' | 'error'
      if (result.value === 'shown') {
        console.log('[Review] Dialog shown to user');
        return true;
      }
      console.log(`[Review] Dialog not shown: ${result.value}`);
      return false;
    } catch (error) {
      // Google Play may reject the request for various reasons (quota,
      // already reviewed, offline, etc.) — never crash the app for this
      console.warn('[Review] Request failed:', error);
      return false;
    }
  },

  /**
   * Check if a review prompt should be attempted for the given completed level.
   *
   * @param completedLevelIndex The 1-based level number the player just completed
   * @returns true if the level index is in the REVIEW_LEVELS set
   */
  shouldPromptForLevel: (completedLevelIndex: number): boolean => {
    return Review.REVIEW_LEVELS.has(completedLevelIndex);
  },
};

export default Review;