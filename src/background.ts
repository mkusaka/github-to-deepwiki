chrome.commands.onCommand.addListener(async (command) => {
  if (command !== "go-deepwiki") return;

  // アクティブタブを取得
  const tabs = await chrome.tabs.query({ active: true, currentWindow: true });
  const tab = tabs[0];
  if (!tab || !tab.url) return;

  try {
    const url = new URL(tab.url);
    if (url.hostname === "github.com") {
      url.hostname = "deepwiki.com";
      // タブを遷移
      await chrome.tabs.update(tab.id!, { url: url.href });
    }
  } catch (e) {
    console.error("Invalid URL:", tab.url);
  }
});
