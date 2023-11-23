module.exports = {
  title: "Stable Video Diffusion",
  description: "[NVIDIA ONLY] Stable Video Diffusion Streamlit App. Currently supports Nvidia GPU machines only.",
  icon: "icon.gif",
  menu: async (kernel) => {
    let installed = await kernel.exists(__dirname, "generative-models", "venv")
    if (installed) {
      let streamlit_running = await kernel.running(__dirname, "start.json")
      let running = streamlit_running
      if (running) {
        return [
          { icon: "fa-solid fa-spin fa-circle-notch", text: "Running" },
          { icon: "fa-solid fa-terminal", text: "Terminal", href: "start.json" },
          { icon: "fa-solid fa-file-arrow-down", text: "Download SVD-XT Model", href: "xt.json", params: { fullscreen: true, run: true } },
        ]
        */
      } else {
        return [
          { icon: "fa-solid fa-power-off", text: "Start", href: "start.json", params: { fullscreen: true, run: true } },
          { icon: "fa-solid fa-file-arrow-down", text: "Download SVD-XT Model", href: "xt.json", params: { fullscreen: true, run: true } },
        ]
      }
    } else {
      return [{ icon: "fa-solid fa-plug", text: "Install", href: "install.json", params: { run: true, fullscreen: true } }]
    }
  }
}
