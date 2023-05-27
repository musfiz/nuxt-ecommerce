<template>
  <div>
    <div class="section">
      <div class="section-head">
        <div class="breadcrumb">জনপ্রিয়</div>
      </div>
      <div class="section-body">
        <div class="section-content">
          <!-- this will be a loop  -->
          <div class="section-wrapper" v-for="item in 8" :key="item">
            <div class="section-item">
                <div class="section-img">
                  <img :src="`frontend/popular/${item}.jpg`" alt="No Image">
                </div>
                <div class="section-name">
                  চালডাল প্রিমিয়াম গরুর মাংস মিশ্রিত হাড়যুক্ত ± ৫০ গ্রাম ১ কেজি
                </div>
                <div class="section-price">
                  <span class="new-price">৳ ২৩০</span>
                  <span class="old-price">৳ ৩০০</span>
                </div>
            </div>
            <div class="section-item-overlay">
              
              <div class="section-details">
                বিস্তারিত>>
              </div>
            </div>
            <div class="section-btn">
              <img src="~/assets/icons/add.png" alt="">
              <p>Add to Bag</p>
            </div>
          </div>
          <!-- this will be a loop  -->
        </div>
      </div>
    </div>
  </div>
</template>