// Fabric Texture - Artisan Craft Landing Page
// 手作品牌著陸頁 - 展示布料紋理、手寫字體、縫線細節等特殊元素

export const fabricFullPageHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Artisan Craft - Handmade with Love</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&family=Merriweather:wght@300;400;700&family=Dancing+Script:wght@400;700&display=swap');
  </style>
</head>
<body>
  <!-- 布料紋理背景層 -->
  <div class="fabric-texture-bg"></div>

  <!-- 主容器 -->
  <div class="fabric-landing-page">

    <!-- 布料標籤導航欄 -->
    <nav class="fabric-nav">
      <div class="fabric-nav-container">
        <div class="fabric-logo">
          <span class="logo-text">Artisan</span>
          <span class="logo-stitch"></span>
        </div>
        <div class="fabric-nav-menu">
          <a href="javascript:void(0)" class="fabric-tab active">Home</a>
          <a href="javascript:void(0)" class="fabric-tab">Collection</a>
          <a href="javascript:void(0)" class="fabric-tab">About</a>
          <a href="javascript:void(0)" class="fabric-tab">Contact</a>
        </div>
        <button class="fabric-btn-small fabric-linen">Shop Now</button>
      </div>
    </nav>

    <!-- Hero 區域 -->
    <section class="fabric-hero">
      <div class="hero-content">
        <h1 class="hero-title">
          Handcrafted with Love
          <span class="hero-stitch-decoration"></span>
        </h1>
        <p class="hero-subtitle handwriting">Where every thread tells a story</p>
        <p class="hero-description">
          Discover our collection of artisan fabrics, each piece carefully selected
          and crafted with passion for quality and sustainability.
        </p>
        <div class="hero-buttons">
          <button class="fabric-btn fabric-linen large">Explore Collection</button>
          <button class="fabric-btn fabric-canvas large outline">Learn More</button>
        </div>
      </div>
      <div class="hero-visual">
        <div class="fabric-sample-showcase">
          <div class="sample-badge">100% Natural</div>
          <div class="fabric-samples-grid">
            <div class="mini-sample linen"></div>
            <div class="mini-sample canvas"></div>
            <div class="mini-sample denim"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- 三種布料材質展示區 -->
    <section class="fabric-showcase">
      <div class="section-header">
        <h2 class="section-title">Our Signature Fabrics</h2>
        <p class="section-subtitle handwriting">Timeless textures for modern living</p>
      </div>

      <div class="fabric-cards-grid">
        <!-- 亞麻布卡片 -->
        <div class="fabric-card linen-card">
          <div class="card-texture-overlay linen-texture"></div>
          <div class="card-content">
            <div class="fabric-tag">Premium</div>
            <h3 class="card-title">Linen Collection</h3>
            <p class="card-description">
              Breathable and elegant, our linen fabrics bring a touch of
              sophistication to any space. Perfect for curtains, upholstery,
              and table linens.
            </p>
            <div class="card-features">
              <span class="feature-badge">🌾 Natural</span>
              <span class="feature-badge">🌡️ Cool</span>
              <span class="feature-badge">✨ Elegant</span>
            </div>
            <button class="fabric-btn fabric-linen">View Collection</button>
          </div>
          <div class="card-stitch-border"></div>
        </div>

        <!-- 帆布卡片 -->
        <div class="fabric-card canvas-card">
          <div class="card-texture-overlay canvas-texture"></div>
          <div class="card-content">
            <div class="fabric-tag">Durable</div>
            <h3 class="card-title">Canvas Collection</h3>
            <p class="card-description">
              Strong and versatile, our canvas fabrics are built to last.
              Ideal for bags, outdoor cushions, and heavy-duty applications.
            </p>
            <div class="card-features">
              <span class="feature-badge">💪 Strong</span>
              <span class="feature-badge">🎨 Versatile</span>
              <span class="feature-badge">🌍 Eco-friendly</span>
            </div>
            <button class="fabric-btn fabric-canvas">View Collection</button>
          </div>
          <div class="card-stitch-border"></div>
        </div>

        <!-- 牛仔布卡片 -->
        <div class="fabric-card denim-card">
          <div class="card-texture-overlay denim-texture"></div>
          <div class="card-content">
            <div class="fabric-tag">Classic</div>
            <h3 class="card-title">Denim Collection</h3>
            <p class="card-description">
              Timeless and rugged, our denim fabrics combine style with
              durability. Perfect for fashion, accessories, and home decor.
            </p>
            <div class="card-features">
              <span class="feature-badge">⏳ Timeless</span>
              <span class="feature-badge">🔥 Trendy</span>
              <span class="feature-badge">🛡️ Durable</span>
            </div>
            <button class="fabric-btn fabric-denim">View Collection</button>
          </div>
          <div class="card-stitch-border"></div>
        </div>
      </div>
    </section>

    <!-- 產品網格區 -->
    <section class="product-grid-section">
      <div class="section-header">
        <h2 class="section-title">Featured Products</h2>
        <p class="section-subtitle handwriting">Handpicked for you</p>
      </div>

      <div class="products-grid">
        <!-- 產品 1 -->
        <div class="product-card">
          <div class="product-image linen-product">
            <div class="product-badge">New</div>
            <div class="product-texture-sample linen-texture"></div>
          </div>
          <div class="product-info">
            <h4 class="product-name">Linen Table Runner</h4>
            <p class="product-description">Natural beige with hand-stitched edges</p>
            <div class="product-price">
              <span class="price-tag">$48.00</span>
              <button class="add-to-cart-btn">Add to Cart</button>
            </div>
          </div>
        </div>

        <!-- 產品 2 -->
        <div class="product-card">
          <div class="product-image canvas-product">
            <div class="product-badge sale">Sale</div>
            <div class="product-texture-sample canvas-texture"></div>
          </div>
          <div class="product-info">
            <h4 class="product-name">Canvas Tote Bag</h4>
            <p class="product-description">Eco-friendly with leather handles</p>
            <div class="product-price">
              <span class="price-tag"><s>$65.00</s> $52.00</span>
              <button class="add-to-cart-btn">Add to Cart</button>
            </div>
          </div>
        </div>

        <!-- 產品 3 -->
        <div class="product-card">
          <div class="product-image denim-product">
            <div class="product-badge">Popular</div>
            <div class="product-texture-sample denim-texture"></div>
          </div>
          <div class="product-info">
            <h4 class="product-name">Denim Cushion Cover</h4>
            <p class="product-description">Vintage wash with brass zipper</p>
            <div class="product-price">
              <span class="price-tag">$32.00</span>
              <button class="add-to-cart-btn">Add to Cart</button>
            </div>
          </div>
        </div>

        <!-- 產品 4 -->
        <div class="product-card">
          <div class="product-image linen-product">
            <div class="product-texture-sample linen-texture"></div>
          </div>
          <div class="product-info">
            <h4 class="product-name">Linen Apron</h4>
            <p class="product-description">Professional chef style with pockets</p>
            <div class="product-price">
              <span class="price-tag">$56.00</span>
              <button class="add-to-cart-btn">Add to Cart</button>
            </div>
          </div>
        </div>

        <!-- 產品 5 -->
        <div class="product-card">
          <div class="product-image canvas-product">
            <div class="product-badge">Handmade</div>
            <div class="product-texture-sample canvas-texture"></div>
          </div>
          <div class="product-info">
            <h4 class="product-name">Canvas Wall Art</h4>
            <p class="product-description">Abstract geometric pattern</p>
            <div class="product-price">
              <span class="price-tag">$78.00</span>
              <button class="add-to-cart-btn">Add to Cart</button>
            </div>
          </div>
        </div>

        <!-- 產品 6 -->
        <div class="product-card">
          <div class="product-image denim-product">
            <div class="product-texture-sample denim-texture"></div>
          </div>
          <div class="product-info">
            <h4 class="product-name">Denim Placemat Set</h4>
            <p class="product-description">Set of 4 with contrast stitching</p>
            <div class="product-price">
              <span class="price-tag">$44.00</span>
              <button class="add-to-cart-btn">Add to Cart</button>
            </div>
          </div>
        </div>

        <!-- 產品 7 -->
        <div class="product-card">
          <div class="product-image linen-product">
            <div class="product-badge">Limited</div>
            <div class="product-texture-sample linen-texture"></div>
          </div>
          <div class="product-info">
            <h4 class="product-name">Linen Throw Blanket</h4>
            <p class="product-description">Oversized with fringe details</p>
            <div class="product-price">
              <span class="price-tag">$92.00</span>
              <button class="add-to-cart-btn">Add to Cart</button>
            </div>
          </div>
        </div>

        <!-- 產品 8 -->
        <div class="product-card">
          <div class="product-image canvas-product">
            <div class="product-texture-sample canvas-texture"></div>
          </div>
          <div class="product-info">
            <h4 class="product-name">Canvas Storage Basket</h4>
            <p class="product-description">Collapsible with rope handles</p>
            <div class="product-price">
              <span class="price-tag">$38.00</span>
              <button class="add-to-cart-btn">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 證言區（布料便籤風格） -->
    <section class="testimonials-section">
      <div class="section-header">
        <h2 class="section-title">What Our Customers Say</h2>
        <p class="section-subtitle handwriting">Stories from our community</p>
      </div>

      <div class="testimonials-grid">
        <!-- 證言 1 -->
        <div class="testimonial-card fabric-note linen-note">
          <div class="note-pin"></div>
          <div class="note-stitch"></div>
          <p class="testimonial-text handwriting">
            "The linen quality is exceptional! It's transformed my dining room
            into a cozy, elegant space. Absolutely worth every penny."
          </p>
          <div class="testimonial-author">
            <div class="author-avatar">SM</div>
            <div class="author-info">
              <p class="author-name">Sarah Mitchell</p>
              <p class="author-role">Interior Designer</p>
            </div>
          </div>
          <div class="star-rating">★★★★★</div>
        </div>

        <!-- 證言 2 -->
        <div class="testimonial-card fabric-note canvas-note">
          <div class="note-pin"></div>
          <div class="note-stitch"></div>
          <p class="testimonial-text handwriting">
            "I love the durability of the canvas bags! They're perfect for
            my daily errands and they look amazing. Highly recommended!"
          </p>
          <div class="testimonial-author">
            <div class="author-avatar">JL</div>
            <div class="author-info">
              <p class="author-name">James Lee</p>
              <p class="author-role">Sustainable Living Blogger</p>
            </div>
          </div>
          <div class="star-rating">★★★★★</div>
        </div>

        <!-- 證言 3 -->
        <div class="testimonial-card fabric-note denim-note">
          <div class="note-pin"></div>
          <div class="note-stitch"></div>
          <p class="testimonial-text handwriting">
            "The denim cushions are a game-changer! They add such a cool,
            casual vibe to my living room. Plus, they're super comfortable."
          </p>
          <div class="testimonial-author">
            <div class="author-avatar">EP</div>
            <div class="author-info">
              <p class="author-name">Emma Parker</p>
              <p class="author-role">Fashion Stylist</p>
            </div>
          </div>
          <div class="star-rating">★★★★★</div>
        </div>
      </div>
    </section>

    <!-- 品牌故事區 -->
    <section class="brand-story-section">
      <div class="story-content">
        <div class="story-text">
          <h2 class="story-title">Our Craft, Your Story</h2>
          <p class="story-subtitle handwriting">Since 2010</p>
          <p class="story-description">
            At Artisan Craft, we believe that every fabric has a soul. For over a decade,
            we've been sourcing the finest natural materials from sustainable suppliers
            around the world. Each piece is carefully inspected, tested, and prepared
            with love and care.
          </p>
          <p class="story-description">
            Our commitment to quality and sustainability drives everything we do.
            We work directly with local artisans and eco-conscious manufacturers
            to ensure that every product meets our high standards while respecting
            our planet.
          </p>
          <div class="story-values">
            <div class="value-item">
              <span class="value-icon">🌱</span>
              <p class="value-text">Sustainable</p>
            </div>
            <div class="value-item">
              <span class="value-icon">✋</span>
              <p class="value-text">Handcrafted</p>
            </div>
            <div class="value-item">
              <span class="value-icon">♻️</span>
              <p class="value-text">Eco-friendly</p>
            </div>
            <div class="value-item">
              <span class="value-icon">❤️</span>
              <p class="value-text">With Love</p>
            </div>
          </div>
        </div>
        <div class="story-visual">
          <div class="brand-badge linen-texture">
            <div class="badge-content">
              <p class="badge-text handwriting">Handmade</p>
              <p class="badge-year">Since 2010</p>
              <div class="badge-seal">★</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA 區域 -->
    <section class="cta-section">
      <div class="cta-container">
        <div class="cta-decoration-left"></div>
        <div class="cta-content">
          <h2 class="cta-title">Start Your Handcraft Journey</h2>
          <p class="cta-subtitle handwriting">Join thousands of happy customers</p>
          <p class="cta-description">
            Subscribe to our newsletter and get 15% off your first order.
            Plus, be the first to know about new collections and exclusive offers.
          </p>
          <div class="cta-form">
            <input type="email" class="email-input" placeholder="Enter your email address">
            <button class="fabric-btn fabric-denim large">Subscribe Now</button>
          </div>
          <p class="cta-note">No spam, just handcrafted goodness. Unsubscribe anytime.</p>
        </div>
        <div class="cta-decoration-right"></div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="fabric-footer">
      <div class="footer-content">
        <div class="footer-column">
          <h4 class="footer-title">Artisan Craft</h4>
          <p class="footer-description">
            Bringing the warmth of handcrafted fabrics to modern living since 2010.
          </p>
          <div class="footer-social">
            <a href="javascript:void(0)" class="social-link">Facebook</a>
            <a href="javascript:void(0)" class="social-link">Instagram</a>
            <a href="javascript:void(0)" class="social-link">Pinterest</a>
          </div>
        </div>

        <div class="footer-column">
          <h4 class="footer-title">Shop</h4>
          <ul class="footer-links">
            <li><a href="javascript:void(0)">Linen Collection</a></li>
            <li><a href="javascript:void(0)">Canvas Collection</a></li>
            <li><a href="javascript:void(0)">Denim Collection</a></li>
            <li><a href="javascript:void(0)">Sale</a></li>
          </ul>
        </div>

        <div class="footer-column">
          <h4 class="footer-title">Support</h4>
          <ul class="footer-links">
            <li><a href="javascript:void(0)">Contact Us</a></li>
            <li><a href="javascript:void(0)">Shipping Info</a></li>
            <li><a href="javascript:void(0)">Returns</a></li>
            <li><a href="javascript:void(0)">FAQ</a></li>
          </ul>
        </div>

        <div class="footer-column">
          <h4 class="footer-title">Company</h4>
          <ul class="footer-links">
            <li><a href="javascript:void(0)">About Us</a></li>
            <li><a href="javascript:void(0)">Our Story</a></li>
            <li><a href="javascript:void(0)">Sustainability</a></li>
            <li><a href="javascript:void(0)">Careers</a></li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <div class="footer-stitch-line"></div>
        <p class="footer-copyright">
          © 2024 Artisan Craft. Handmade with ❤️ | All rights reserved
        </p>
      </div>
    </footer>

  </div>
</body>
</html>
`;

export const fabricFullPageStyles = `
/* ============================================
   FABRIC TEXTURE - ARTISAN CRAFT LANDING PAGE
   ============================================

   配色方案 (Color Scheme):
   - 亞麻米黃 (Linen): #e8dcc4
   - 帆布卡其 (Canvas): #d4c5a9
   - 牛仔藍灰 (Denim): #4a5f7f
   - 溫暖米白 (Background): #f5f2ed
   - 深灰藍 (Text): #2c3e50
   - 縫線淺色: rgba(255,255,255,0.6)
   - 縫線深色: rgba(0,0,0,0.15)

   字體系統 (Typography):
   - Merriweather: 正文
   - Caveat: 手寫證言
   - Dancing Script: 裝飾標題
   ============================================ */

/* === 全局樣式 === */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Merriweather', serif;
  color: #2c3e50;
  background: #f5f2ed;
  line-height: 1.6;
  overflow-x: hidden;
}

/* === 布料紋理背景層 === */
.fabric-texture-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background: linear-gradient(135deg, #f5f2ed 0%, #ebe8e3 100%);
  background-image:
    repeating-linear-gradient(
      90deg,
      transparent,
      transparent 2px,
      rgba(0, 0, 0, 0.015) 2px,
      rgba(0, 0, 0, 0.015) 4px
    ),
    repeating-linear-gradient(
      0deg,
      transparent,
      transparent 2px,
      rgba(0, 0, 0, 0.015) 2px,
      rgba(0, 0, 0, 0.015) 4px
    );
}

/* === 主容器 === */
.fabric-landing-page {
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

/* === 手寫字體樣式 === */
.handwriting {
  font-family: 'Caveat', cursive;
  font-size: 1.6em;
  font-weight: 400;
  letter-spacing: 0.5px;
}

/* ============================================
   布料標籤導航欄
   ============================================ */
.fabric-nav {
  background: linear-gradient(180deg, #e8dcc4 0%, #d4c5a9 100%);
  padding: 16px 32px;
  box-shadow:
    0 4px 12px rgba(0, 0, 0, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.4);
  border-bottom: 2px solid rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
  background-image:
    repeating-linear-gradient(
      90deg,
      transparent,
      transparent 2px,
      rgba(0, 0, 0, 0.02) 2px,
      rgba(0, 0, 0, 0.02) 4px
    );
}

.fabric-nav-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1400px;
  margin: 0 auto;
}

.fabric-logo {
  display: flex;
  align-items: center;
  gap: 12px;
}

.logo-text {
  font-family: 'Dancing Script', cursive;
  font-size: 2em;
  font-weight: 700;
  color: #2c3e50;
  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.6);
}

.logo-stitch {
  width: 40px;
  height: 2px;
  background: repeating-linear-gradient(
    90deg,
    rgba(0, 0, 0, 0.3),
    rgba(0, 0, 0, 0.3) 4px,
    transparent 4px,
    transparent 8px
  );
}

.fabric-nav-menu {
  display: flex;
  gap: 8px;
}

.fabric-tab {
  padding: 12px 24px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 8px 8px 0 0;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: none;
  color: #5a6c7d;
  text-decoration: none;
  font-weight: 400;
  font-size: 0.95em;
  transition: all 0.3s ease;
  position: relative;
}

.fabric-tab::after {
  content: '';
  position: absolute;
  bottom: 4px;
  left: 12px;
  right: 12px;
  border-bottom: 1px dashed rgba(0, 0, 0, 0.15);
}

.fabric-tab:hover,
.fabric-tab.active {
  background: rgba(255, 255, 255, 0.6);
  color: #2c3e50;
  transform: translateY(-2px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

/* === 按鈕通用樣式 === */
.fabric-btn {
  padding: 12px 32px;
  border: 2px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  font-family: 'Merriweather', serif;
  font-size: 0.95em;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.fabric-btn::before {
  content: '';
  position: absolute;
  top: 8px;
  left: 12px;
  right: 12px;
  border-top: 1px dashed rgba(255, 255, 255, 0.5);
}

.fabric-btn::after {
  content: '';
  position: absolute;
  bottom: 8px;
  left: 12px;
  right: 12px;
  border-bottom: 1px dashed rgba(0, 0, 0, 0.15);
}

.fabric-btn.large {
  padding: 16px 48px;
  font-size: 1.1em;
}

.fabric-btn-small {
  padding: 8px 20px;
  font-size: 0.9em;
}

/* 亞麻按鈕 */
.fabric-btn.fabric-linen {
  background: #e8dcc4;
  color: #2c3e50;
  background-image:
    repeating-linear-gradient(
      90deg,
      transparent,
      transparent 2px,
      rgba(0, 0, 0, 0.03) 2px,
      rgba(0, 0, 0, 0.03) 4px
    );
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.fabric-btn.fabric-linen:hover {
  background: #dfd0b0;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
}

/* 帆布按鈕 */
.fabric-btn.fabric-canvas {
  background: #d4c5a9;
  color: #2c3e50;
  background-image:
    repeating-linear-gradient(
      45deg,
      transparent,
      transparent 3px,
      rgba(0, 0, 0, 0.02) 3px,
      rgba(0, 0, 0, 0.02) 6px
    ),
    repeating-linear-gradient(
      -45deg,
      transparent,
      transparent 3px,
      rgba(0, 0, 0, 0.02) 3px,
      rgba(0, 0, 0, 0.02) 6px
    );
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.fabric-btn.fabric-canvas:hover {
  background: #c5b595;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
}

/* 牛仔按鈕 */
.fabric-btn.fabric-denim {
  background: #4a5f7f;
  color: #ffffff;
  background-image:
    repeating-linear-gradient(
      45deg,
      transparent,
      transparent 2px,
      rgba(255, 255, 255, 0.05) 2px,
      rgba(255, 255, 255, 0.05) 4px
    ),
    repeating-linear-gradient(
      -45deg,
      transparent,
      transparent 2px,
      rgba(0, 0, 0, 0.1) 2px,
      rgba(0, 0, 0, 0.1) 4px
    );
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.fabric-btn.fabric-denim:hover {
  background: #3d4f68;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.25);
}

/* 輪廓按鈕 */
.fabric-btn.outline {
  background: transparent;
  border: 2px solid #d4c5a9;
  color: #2c3e50;
  box-shadow: none;
}

.fabric-btn.outline:hover {
  background: rgba(212, 197, 169, 0.2);
}

/* ============================================
   Hero 區域
   ============================================ */
.fabric-hero {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 64px;
  padding: 80px 32px;
  align-items: center;
}

.hero-content {
  max-width: 600px;
}

.hero-title {
  font-size: 3.5em;
  font-weight: 700;
  line-height: 1.2;
  color: #2c3e50;
  margin-bottom: 16px;
  position: relative;
}

.hero-stitch-decoration {
  display: block;
  width: 120px;
  height: 3px;
  background: repeating-linear-gradient(
    90deg,
    #8b7355,
    #8b7355 6px,
    transparent 6px,
    transparent 12px
  );
  margin-top: 16px;
}

.hero-subtitle {
  font-size: 2em;
  color: #5a6c7d;
  margin-bottom: 24px;
}

.hero-description {
  font-size: 1.1em;
  color: #5a6c7d;
  margin-bottom: 32px;
  line-height: 1.8;
}

.hero-buttons {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

.hero-visual {
  display: flex;
  justify-content: center;
  align-items: center;
}

.fabric-sample-showcase {
  background: linear-gradient(135deg, #e8dcc4 0%, #d4c5a9 100%);
  padding: 48px;
  border-radius: 20px;
  box-shadow:
    0 8px 32px rgba(0, 0, 0, 0.15),
    inset 0 2px 0 rgba(255, 255, 255, 0.5);
  border: 3px solid rgba(255, 255, 255, 0.6);
  position: relative;
  background-image:
    repeating-linear-gradient(
      90deg,
      transparent,
      transparent 3px,
      rgba(0, 0, 0, 0.02) 3px,
      rgba(0, 0, 0, 0.02) 6px
    );
}

.sample-badge {
  position: absolute;
  top: -16px;
  left: 50%;
  transform: translateX(-50%);
  background: #8b7355;
  color: #ffffff;
  padding: 8px 24px;
  border-radius: 20px;
  font-size: 0.85em;
  font-weight: 700;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.fabric-samples-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}

.mini-sample {
  width: 100px;
  height: 100px;
  border-radius: 12px;
  border: 3px solid rgba(255, 255, 255, 0.8);
  box-shadow:
    0 4px 12px rgba(0, 0, 0, 0.15),
    inset 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.mini-sample:hover {
  transform: scale(1.05) rotate(2deg);
}

.mini-sample.linen {
  background: #e8dcc4;
  background-image:
    repeating-linear-gradient(
      90deg,
      transparent,
      transparent 2px,
      rgba(0, 0, 0, 0.04) 2px,
      rgba(0, 0, 0, 0.04) 4px
    ),
    repeating-linear-gradient(
      0deg,
      transparent,
      transparent 2px,
      rgba(0, 0, 0, 0.04) 2px,
      rgba(0, 0, 0, 0.04) 4px
    );
}

.mini-sample.canvas {
  background: #d4c5a9;
  background-image:
    repeating-linear-gradient(
      45deg,
      transparent,
      transparent 3px,
      rgba(0, 0, 0, 0.03) 3px,
      rgba(0, 0, 0, 0.03) 6px
    ),
    repeating-linear-gradient(
      -45deg,
      transparent,
      transparent 3px,
      rgba(0, 0, 0, 0.03) 3px,
      rgba(0, 0, 0, 0.03) 6px
    );
}

.mini-sample.denim {
  background: #4a5f7f;
  background-image:
    repeating-linear-gradient(
      45deg,
      transparent,
      transparent 2px,
      rgba(255, 255, 255, 0.08) 2px,
      rgba(255, 255, 255, 0.08) 4px
    ),
    repeating-linear-gradient(
      -45deg,
      transparent,
      transparent 2px,
      rgba(0, 0, 0, 0.15) 2px,
      rgba(0, 0, 0, 0.15) 4px
    );
}

/* ============================================
   布料展示區
   ============================================ */
.fabric-showcase {
  padding: 80px 32px;
  background: rgba(255, 255, 255, 0.5);
}

.section-header {
  text-align: center;
  margin-bottom: 64px;
}

.section-title {
  font-size: 2.5em;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 12px;
}

.section-subtitle {
  font-size: 1.8em;
  color: #8b7355;
}

.fabric-cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 32px;
  max-width: 1200px;
  margin: 0 auto;
}

.fabric-card {
  background: #ffffff;
  border-radius: 16px;
  padding: 32px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
}

.fabric-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.15);
}

.card-texture-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 120px;
  opacity: 0.4;
  z-index: 0;
}

.linen-texture {
  background: #e8dcc4;
  background-image:
    repeating-linear-gradient(
      90deg,
      transparent,
      transparent 2px,
      rgba(0, 0, 0, 0.05) 2px,
      rgba(0, 0, 0, 0.05) 4px
    ),
    repeating-linear-gradient(
      0deg,
      transparent,
      transparent 2px,
      rgba(0, 0, 0, 0.05) 2px,
      rgba(0, 0, 0, 0.05) 4px
    );
}

.canvas-texture {
  background: #d4c5a9;
  background-image:
    repeating-linear-gradient(
      45deg,
      transparent,
      transparent 3px,
      rgba(0, 0, 0, 0.04) 3px,
      rgba(0, 0, 0, 0.04) 6px
    ),
    repeating-linear-gradient(
      -45deg,
      transparent,
      transparent 3px,
      rgba(0, 0, 0, 0.04) 3px,
      rgba(0, 0, 0, 0.04) 6px
    );
}

.denim-texture {
  background: #4a5f7f;
  background-image:
    repeating-linear-gradient(
      45deg,
      transparent,
      transparent 2px,
      rgba(255, 255, 255, 0.1) 2px,
      rgba(255, 255, 255, 0.1) 4px
    ),
    repeating-linear-gradient(
      -45deg,
      transparent,
      transparent 2px,
      rgba(0, 0, 0, 0.2) 2px,
      rgba(0, 0, 0, 0.2) 4px
    );
}

.card-content {
  position: relative;
  z-index: 1;
}

.fabric-tag {
  display: inline-block;
  background: #8b7355;
  color: #ffffff;
  padding: 6px 16px;
  border-radius: 6px;
  font-size: 0.8em;
  font-weight: 700;
  margin-bottom: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

.card-title {
  font-size: 1.8em;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 16px;
}

.card-description {
  color: #5a6c7d;
  margin-bottom: 24px;
  line-height: 1.7;
}

.card-features {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 24px;
}

.feature-badge {
  background: rgba(139, 115, 85, 0.1);
  border: 1px solid rgba(139, 115, 85, 0.3);
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 0.85em;
  color: #2c3e50;
}

.card-stitch-border {
  position: absolute;
  bottom: 12px;
  left: 12px;
  right: 12px;
  border-bottom: 2px dashed rgba(139, 115, 85, 0.3);
}

/* ============================================
   產品網格區
   ============================================ */
.product-grid-section {
  padding: 80px 32px;
  background: #ffffff;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 32px;
  max-width: 1200px;
  margin: 0 auto;
}

.product-card {
  background: #f5f2ed;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  border: 2px solid transparent;
}

.product-card:hover {
  border-color: #d4c5a9;
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
}

.product-image {
  position: relative;
  height: 240px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.product-texture-sample {
  width: 100%;
  height: 100%;
}

.product-badge {
  position: absolute;
  top: 12px;
  right: 12px;
  background: #8b7355;
  color: #ffffff;
  padding: 6px 16px;
  border-radius: 20px;
  font-size: 0.75em;
  font-weight: 700;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  z-index: 2;
}

.product-badge.sale {
  background: #e74c3c;
}

.product-info {
  padding: 20px;
}

.product-name {
  font-size: 1.2em;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 8px;
}

.product-description {
  font-size: 0.9em;
  color: #5a6c7d;
  margin-bottom: 16px;
}

.product-price {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.price-tag {
  font-size: 1.3em;
  font-weight: 700;
  color: #8b7355;
}

.add-to-cart-btn {
  background: #d4c5a9;
  color: #2c3e50;
  border: none;
  padding: 8px 16px;
  border-radius: 6px;
  font-size: 0.85em;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
}

.add-to-cart-btn:hover {
  background: #c5b595;
  transform: scale(1.05);
}

.linen-product .product-texture-sample {
  background: linear-gradient(135deg, #e8dcc4 0%, #dfd0b0 100%);
  background-image:
    repeating-linear-gradient(
      90deg,
      transparent,
      transparent 3px,
      rgba(0, 0, 0, 0.03) 3px,
      rgba(0, 0, 0, 0.03) 6px
    );
}

.canvas-product .product-texture-sample {
  background: linear-gradient(135deg, #d4c5a9 0%, #c5b595 100%);
  background-image:
    repeating-linear-gradient(
      45deg,
      transparent,
      transparent 4px,
      rgba(0, 0, 0, 0.02) 4px,
      rgba(0, 0, 0, 0.02) 8px
    );
}

.denim-product .product-texture-sample {
  background: linear-gradient(135deg, #4a5f7f 0%, #3d4f68 100%);
  background-image:
    repeating-linear-gradient(
      45deg,
      transparent,
      transparent 3px,
      rgba(255, 255, 255, 0.05) 3px,
      rgba(255, 255, 255, 0.05) 6px
    );
}

/* ============================================
   證言區（布料便籤風格）
   ============================================ */
.testimonials-section {
  padding: 80px 32px;
  background: rgba(255, 255, 255, 0.7);
}

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 32px;
  max-width: 1200px;
  margin: 0 auto;
}

.testimonial-card {
  padding: 32px;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  position: relative;
  transition: all 0.3s ease;
  border: 3px solid rgba(255, 255, 255, 0.8);
}

.testimonial-card:hover {
  transform: rotate(-1deg) translateY(-4px);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.15);
}

.fabric-note.linen-note {
  background: #e8dcc4;
  background-image:
    repeating-linear-gradient(
      90deg,
      transparent,
      transparent 2px,
      rgba(0, 0, 0, 0.02) 2px,
      rgba(0, 0, 0, 0.02) 4px
    );
}

.fabric-note.canvas-note {
  background: #d4c5a9;
  background-image:
    repeating-linear-gradient(
      45deg,
      transparent,
      transparent 3px,
      rgba(0, 0, 0, 0.015) 3px,
      rgba(0, 0, 0, 0.015) 6px
    );
}

.fabric-note.denim-note {
  background: #4a5f7f;
  color: #ffffff;
  background-image:
    repeating-linear-gradient(
      45deg,
      transparent,
      transparent 2px,
      rgba(255, 255, 255, 0.03) 2px,
      rgba(255, 255, 255, 0.03) 4px
    );
}

.note-pin {
  position: absolute;
  top: -8px;
  left: 50%;
  transform: translateX(-50%);
  width: 20px;
  height: 20px;
  background: radial-gradient(circle, #8b7355 0%, #6b5845 100%);
  border-radius: 50%;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
}

.note-pin::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 6px;
  height: 6px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 50%;
}

.note-stitch {
  position: absolute;
  top: 16px;
  left: 16px;
  right: 16px;
  border-top: 1px dashed rgba(0, 0, 0, 0.2);
}

.testimonial-text {
  font-size: 1.15em;
  line-height: 1.7;
  margin-top: 32px;
  margin-bottom: 24px;
  color: inherit;
}

.fabric-note.denim-note .testimonial-text {
  color: rgba(255, 255, 255, 0.95);
}

.testimonial-author {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 16px;
}

.author-avatar {
  width: 48px;
  height: 48px;
  background: rgba(139, 115, 85, 0.6);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  color: #ffffff;
  font-size: 1.1em;
}

.author-name {
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 4px;
}

.fabric-note.denim-note .author-name {
  color: #ffffff;
}

.author-role {
  font-size: 0.85em;
  color: #5a6c7d;
}

.fabric-note.denim-note .author-role {
  color: rgba(255, 255, 255, 0.8);
}

.star-rating {
  color: #f39c12;
  font-size: 1.2em;
}

/* ============================================
   品牌故事區
   ============================================ */
.brand-story-section {
  padding: 80px 32px;
  background: #ffffff;
}

.story-content {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 64px;
  max-width: 1200px;
  margin: 0 auto;
  align-items: center;
}

.story-title {
  font-size: 2.5em;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 12px;
}

.story-subtitle {
  font-size: 1.6em;
  color: #8b7355;
  margin-bottom: 32px;
}

.story-description {
  font-size: 1.05em;
  color: #5a6c7d;
  line-height: 1.8;
  margin-bottom: 24px;
}

.story-values {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  margin-top: 48px;
}

.value-item {
  text-align: center;
}

.value-icon {
  font-size: 3em;
  display: block;
  margin-bottom: 8px;
}

.value-text {
  font-weight: 700;
  color: #2c3e50;
}

.brand-badge {
  width: 280px;
  height: 280px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow:
    0 12px 40px rgba(0, 0, 0, 0.2),
    inset 0 4px 8px rgba(0, 0, 0, 0.1);
  border: 8px solid rgba(255, 255, 255, 0.6);
  position: relative;
  margin: 0 auto;
}

.brand-badge::before {
  content: '';
  position: absolute;
  inset: 20px;
  border: 2px dashed rgba(0, 0, 0, 0.2);
  border-radius: 50%;
}

.badge-content {
  text-align: center;
  z-index: 1;
}

.badge-text {
  font-size: 2em;
  color: #2c3e50;
  margin-bottom: 8px;
}

.badge-year {
  font-size: 1.8em;
  font-weight: 700;
  color: #8b7355;
  margin-bottom: 16px;
}

.badge-seal {
  font-size: 3em;
  color: #8b7355;
}

/* ============================================
   CTA 區域
   ============================================ */
.cta-section {
  padding: 80px 32px;
  background: linear-gradient(135deg, #e8dcc4 0%, #d4c5a9 100%);
  background-image:
    repeating-linear-gradient(
      90deg,
      transparent,
      transparent 4px,
      rgba(0, 0, 0, 0.01) 4px,
      rgba(0, 0, 0, 0.01) 8px
    );
  position: relative;
  overflow: hidden;
}

.cta-container {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 1;
}

.cta-decoration-left,
.cta-decoration-right {
  position: absolute;
  width: 200px;
  height: 200px;
  opacity: 0.1;
  border-radius: 50%;
  background: radial-gradient(circle, #2c3e50 0%, transparent 70%);
}

.cta-decoration-left {
  top: -50px;
  left: -50px;
}

.cta-decoration-right {
  bottom: -50px;
  right: -50px;
}

.cta-title {
  font-size: 2.5em;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 12px;
}

.cta-subtitle {
  font-size: 1.8em;
  color: #5a6c7d;
  margin-bottom: 24px;
}

.cta-description {
  font-size: 1.1em;
  color: #5a6c7d;
  margin-bottom: 32px;
  line-height: 1.7;
}

.cta-form {
  display: flex;
  gap: 16px;
  max-width: 600px;
  margin: 0 auto 16px;
  flex-wrap: wrap;
  justify-content: center;
}

.email-input {
  flex: 1;
  min-width: 280px;
  padding: 16px 24px;
  border: 2px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  font-family: 'Merriweather', serif;
  font-size: 1em;
  background: rgba(255, 255, 255, 0.9);
  transition: all 0.3s ease;
}

.email-input:focus {
  outline: none;
  border-color: #4a5f7f;
  box-shadow: 0 0 0 3px rgba(74, 95, 127, 0.1);
}

.cta-note {
  font-size: 0.9em;
  color: #5a6c7d;
  font-style: italic;
}

/* ============================================
   Footer
   ============================================ */
.fabric-footer {
  background: linear-gradient(180deg, #2c3e50 0%, #1e2a38 100%);
  color: rgba(255, 255, 255, 0.9);
  padding: 64px 32px 32px;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 48px;
  max-width: 1200px;
  margin: 0 auto 48px;
}

.footer-column {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.footer-title {
  font-size: 1.3em;
  font-weight: 700;
  color: #e8dcc4;
  margin-bottom: 8px;
  position: relative;
  padding-bottom: 12px;
}

.footer-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 60px;
  border-bottom: 2px dashed rgba(232, 220, 196, 0.4);
}

.footer-description {
  font-size: 0.95em;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.7);
}

.footer-social {
  display: flex;
  gap: 16px;
  margin-top: 8px;
}

.social-link {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  font-size: 0.9em;
  transition: color 0.3s ease;
}

.social-link:hover {
  color: #e8dcc4;
}

.footer-links {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.footer-links a {
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  font-size: 0.95em;
  transition: all 0.3s ease;
  display: inline-block;
}

.footer-links a:hover {
  color: #e8dcc4;
  padding-left: 8px;
}

.footer-bottom {
  text-align: center;
  padding-top: 32px;
}

.footer-stitch-line {
  width: 200px;
  height: 2px;
  background: repeating-linear-gradient(
    90deg,
    rgba(232, 220, 196, 0.3),
    rgba(232, 220, 196, 0.3) 6px,
    transparent 6px,
    transparent 12px
  );
  margin: 0 auto 24px;
}

.footer-copyright {
  font-size: 0.9em;
  color: rgba(255, 255, 255, 0.6);
}

/* ============================================
   響應式設計
   ============================================ */
@media (max-width: 1024px) {
  .fabric-hero {
    grid-template-columns: 1fr;
    gap: 48px;
  }

  .hero-visual {
    order: -1;
  }

  .story-content {
    grid-template-columns: 1fr;
    gap: 48px;
  }

  .story-values {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .fabric-nav-container {
    flex-direction: column;
    gap: 16px;
  }

  .fabric-nav-menu {
    width: 100%;
    justify-content: center;
  }

  .fabric-tab {
    padding: 10px 16px;
    font-size: 0.85em;
  }

  .hero-title {
    font-size: 2.5em;
  }

  .hero-subtitle {
    font-size: 1.5em;
  }

  .hero-buttons {
    flex-direction: column;
  }

  .fabric-btn.large {
    width: 100%;
  }

  .section-title {
    font-size: 2em;
  }

  .section-subtitle {
    font-size: 1.4em;
  }

  .fabric-cards-grid {
    grid-template-columns: 1fr;
  }

  .products-grid {
    grid-template-columns: 1fr;
  }

  .testimonials-grid {
    grid-template-columns: 1fr;
  }

  .story-values {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }

  .cta-form {
    flex-direction: column;
  }

  .email-input {
    width: 100%;
  }

  .footer-content {
    grid-template-columns: 1fr;
    gap: 32px;
  }
}

@media (max-width: 480px) {
  .fabric-nav {
    padding: 12px 16px;
  }

  .logo-text {
    font-size: 1.5em;
  }

  .fabric-hero {
    padding: 48px 16px;
  }

  .hero-title {
    font-size: 2em;
  }

  .fabric-sample-showcase {
    padding: 32px;
  }

  .fabric-samples-grid {
    grid-template-columns: 1fr;
  }

  .section-title {
    font-size: 1.8em;
  }

  .fabric-card {
    padding: 24px;
  }

  .story-values {
    grid-template-columns: 1fr;
  }
}
`;
