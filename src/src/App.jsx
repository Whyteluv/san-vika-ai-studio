import { useState } from 'react'

function App() {
  const [mode, setMode] = useState('image')
  const [aspectRatio, setAspectRatio] = useState('9:16')
  const [prompt, setPrompt] = useState('')

  return (
    <div className="app">
      <header className="header">
        <div className="logo">SAN-VIKA</div>
        <div className="brand">AI MEDIA</div>
      </header>

      <main className="container">
        <h1>Create amazing AI content</h1>
        <p className="subtitle">
          Generate product images, videos and adverts with simple prompts.
        </p>

        <section className="card">
          <label>What do you want to create?</label>

          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Describe the image or video you want..."
          />

          <div className="controls">
            <div>
              <label>Content type</label>
              <div className="buttons">
                <button
                  className={mode === 'image' ? 'active' : ''}
                  onClick={() => setMode('image')}
                >
                  🖼️ Image
                </button>

                <button
                  className={mode === 'video' ? 'active' : ''}
                  onClick={() => setMode('video')}
                >
                  🎬 Video
                </button>
              </div>
            </div>

            <div>
              <label>Aspect ratio</label>
              <select
                value={aspectRatio}
                onChange={(e) => setAspectRatio(e.target.value)}
              >
                <option>9:16</option>
                <option>16:9</option>
                <option>1:1</option>
                <option>4:5</option>
              </select>
            </div>
          </div>

          <div className="upload">
            <label>Product image</label>
            <div className="upload-box">
              <span>📷</span>
              <p>Upload your product image</p>
              <small>
                Keep your product packaging and branding unchanged.
              </small>
              <input type="file" accept="image/*" />
            </div>
          </div>

          <button className="generate">
            ✨ Generate {mode === 'image' ? 'Image' : 'Video'}
          </button>
        </section>
      </main>
    </div>
  )
}

export default App
