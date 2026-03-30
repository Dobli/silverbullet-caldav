import { editor } from "@silverbulletmd/silverbullet/syscalls";

export async function syncTasks() {
  await editor.flashNotification("Hello tasks!");
}
