import { ImageResponse } from 'next/og';

export const dynamic = 'force-static';

export const size = {
  width: 32,
  height: 32,
};

export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #00f3ff 0%, #bc13fe 100%)',
          borderRadius: '8px',
        }}
      >
        <span
          style={{
            fontSize: '20px',
            fontWeight: 'bold',
            color: 'white',
            fontFamily: 'system-ui, -apple-system, sans-serif',
          }}
        >
          V
        </span>
      </div>
    ),
    {
      ...size,
    }
  );
}