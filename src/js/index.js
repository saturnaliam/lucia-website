// Function to copy to clipboard.
const copyClipboard = (copyText) => {
    navigator.clipboard.writeText(copyText);

    alert('copied to clipboard!');
}