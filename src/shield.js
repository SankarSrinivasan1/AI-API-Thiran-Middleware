export async function shield({ input, output, tool }) {
  // Input checks
  if (input) {
    const lower = input.toLowerCase();

    if (lower.includes("ignore previous instructions")) {
      return unsafe("Prompt injection detected");
    }

    if (lower.includes("reveal system prompt")) {
      return unsafe("System prompt extraction attempt");
    }
  }

  // Output checks
  if (output) {
    const lower = output.toLowerCase();

    if (lower.includes("confidential")) {
      return unsafe("Possible data leak");
    }

    if (lower.includes("internal use only")) {
      return unsafe("Sensitive information exposure");
    }
  }

  // Tool checks
  if (tool) {
    const restrictedTools = ["adminAccess", "deleteUser", "dropDatabase"];

    if (restrictedTools.includes(tool)) {
      return unsafe("Restricted tool call");
    }
  }

  return safe();
}

function safe() {
  return { safe: true, reason: null };
}

function unsafe(reason) {
  return { safe: false, reason };
}
