declare const process: { env: { NODE_ENV?: string } };

export default function isDevelopment() {
  try {
    return process.env.NODE_ENV !== "production";
  } catch {
    return true;
  }
}
