import { useEffect } from 'react';

export default function SEO({ 
  title, 
  description, 
  image = "/assets/images/logo.png",
  url = "https://alexis-carbillet.com",
  type = "website" 
}) {
  useEffect(() => {
    // Update title
    document.title = title ? `${title} | Alexis Carbillet` : "Alexis Carbillet";
    
    // Update or create meta tags
    const updateMeta = (name, content) => {
      let element = document.querySelector(`meta[name="${name}"], meta[property="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(name.includes('og:') ? 'property' : 'name', name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    if (description) {
      updateMeta('description', description);
      updateMeta('og:description', description);
    }
    
    updateMeta('og:title', title || 'Alexis Carbillet');
    updateMeta('og:type', type);
    updateMeta('og:url', url);
    updateMeta('og:image', image);
    updateMeta('twitter:card', 'summary_large_image');
    updateMeta('twitter:title', title || 'Alexis Carbillet');
    updateMeta('twitter:description', description || '');
    updateMeta('twitter:image', image);
  }, [title, description, image, url, type]);

  return null;
}
