chrome.commands.onCommand.addListener(async (command) => {
  if (command !== "go-deepwiki") return;

  // Navigate from GitHub to DeepWiki
  await navigateToDeepWiki();
});

// Event listener for extension icon click
chrome.action.onClicked.addListener(async (tab) => {
  // Navigate from GitHub to DeepWiki
  await navigateToDeepWiki();
});

// Common function to navigate from GitHub to DeepWiki
async function navigateToDeepWiki() {
  // Get active tab
  const tabs = await chrome.tabs.query({ active: true, currentWindow: true });
  const tab = tabs[0];
  if (!tab || !tab.url) return;

  try {
    const url = new URL(tab.url);
    
    // Only work on GitHub domains
    if (url.hostname !== "github.com") return;
    
    // Replace github.com with deepwiki.com
    url.hostname = "deepwiki.com";
    
    // Navigate to the new URL
    await chrome.tabs.update(tab.id!, { url: url.href });
  } catch (e) {
    console.error("Invalid URL:", tab.url);
  }
}
