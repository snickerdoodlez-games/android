import { Capacitor } from '@capacitor/core';
import { registerPlugin } from '@capacitor/core';

export interface TestLabPlugin {
  isTestLabRun(): Promise<{ isTestLab: boolean; resultPath: string }>;
  writeResults(options: { data: Record<string, unknown> }): Promise<{ success: boolean; filePath: string; bytesWritten: number }>;
  getResultPath(): Promise<{ resultPath: string }>;
}

const TestLab = registerPlugin<TestLabPlugin>('TestLab');

/**
 * Checks if the app was launched by Firebase Test Lab (TEST_LOOP intent).
 * Returns the result path if in test mode, empty string otherwise.
 */
export async function isTestLabRun(): Promise<boolean> {
  if (!Capacitor.isNativePlatform()) return false;
  try {
    const result = await TestLab.isTestLabRun();
    return result.isTestLab;
  } catch {
    return false;
  }
}

/**
 * Writes test results JSON to the Firebase Test Lab result file.
 * Safe to call in non-Test-Lab environments — silently no-ops.
 *
 * @param data A JSON-serializable object with test results
 */
export async function writeTestLabResults(data: Record<string, unknown>): Promise<void> {
  if (!Capacitor.isNativePlatform()) return;
  try {
    const isLab = await TestLab.isTestLabRun();
    if (!isLab.isTestLab) return;
    await TestLab.writeResults({ data });
  } catch (e) {
    console.error('TestLab writeResults failed:', e);
  }
}