module.exports = {
  title: "Stable Video Diffusion",
  menu: async (kernel) => {
    let installed = await kernel.exists(__dirname, "generative-models", "venv")
    if (installed) {
      let streamlit_running = await kernel.running(__dirname, "start.json")
//      let gradio_running = await kernel.running(__dirname, "gradio.json")
//      let running = streamlit_running || gradio_running
      let running = streamlit_running
      if (running) {
        return [
          { icon: "fa-solid fa-spin fa-circle-notch", text: "Running" },
          { icon: "fa-solid fa-terminal", text: "Terminal", href: "start.json" },
        ]
        /*
        if (gradio_running) {
          return [
            { icon: "fa-solid fa-spin fa-circle-notch", text: "Gradio Running" },
            { icon: "fa-solid fa-terminal", text: "Terminal", href: "gradio.json" }
          ]
        } else if (streamlit_running) {
          return [
            { icon: "fa-solid fa-spin fa-circle-notch", text: "Streamlit Running" },
            { icon: "fa-solid fa-terminal", text: "Terminal", href: "start.json" },
          ]
        }
        */
      } else {
        return [
          { icon: "fa-solid fa-power-off", text: "Run Streamlit", href: "start.json", params: { fullscreen: true, run: true } },
//          { icon: "fa-solid fa-power-off", text: "Run Gradio", href: "gradio.json", params: { fullscreen: true, run: true } }
        ]
      }
    } else {
      return [{ icon: "fa-solid fa-plug", text: "Install", href: "install.json", params: { run: true, fullscreen: true } }]
    }
  }
}
