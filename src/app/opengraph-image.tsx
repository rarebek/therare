import { ImageResponse } from 'next/og'

export const alt = 'therare.'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
export const runtime = 'edge'

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: '#030303',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
        }}
      >
        <span
          style={{
            fontSize: 72,
            fontFamily: 'monospace',
            fontStyle: 'italic',
            color: '#ffffff',
            letterSpacing: '-0.02em',
          }}
        >
          therare.
        </span>
        <span
          style={{
            fontSize: 28,
            fontFamily: 'monospace',
            color: '#71717a',
            marginTop: 24,
          }}
        >
          backend engineer — building systems that last
        </span>
      </div>
    ),
    { ...size },
  )
}
