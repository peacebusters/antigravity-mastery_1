import React from 'react';

interface AdComponentProps {
  slot?: string;
  format?: 'auto' | 'fluid' | 'rectangle';
  style?: React.CSSProperties;
}

const AdComponent: React.FC<AdComponentProps> = ({ slot, format = 'auto', style }) => {
  return (
    <div className="ad-container" style={{ 
      margin: '2rem 0', 
      padding: '1rem', 
      background: 'rgba(255, 255, 255, 0.05)', 
      borderRadius: '12px',
      border: '1px dashed var(--border-color)',
      textAlign: 'center',
      minHeight: '100px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      ...style 
    }}>
      <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.5rem', opacity: 0.7 }}>
        SPONSORED {slot ? `(${slot})` : ''}
      </span>
      
      {/* 
          Google AdSense integration code placeholder.
          Once approved, replace this with your actual AdSense script.
      */}
      <div style={{ color: 'var(--text-secondary)', fontStyle: 'italic', fontSize: '0.9rem' }}>
        Ads ({format}) will appear here after AdSense approval.
      </div>
      
      {/* Actual AdSense Snippet (uncomment and configure when ready) */}
      {/* 
      <ins className="adsbygoogle"
           style={{ display: 'block' }}
           data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
           data-ad-slot={slot}
           data-ad-format={format}
           data-full-width-responsive="true"></ins>
      <script>
           (adsbygoogle = window.adsbygoogle || []).push({});
      </script> 
      */}
    </div>
  );
};

export default AdComponent;
