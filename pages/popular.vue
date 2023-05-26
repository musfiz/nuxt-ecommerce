<template>
  <div>
    <div class="section">
      <div class="section-head">
        <div class="breadcrumb">

        </div>
      </div>
      <div class="section-body">
        <div class="section-content">
          <!-- this will be a loop  -->
          <div class="section-item" v-for="item in 10" :key="item">
            <div class="section-wrapper">


              <div class="add-btn-wrapper">
                <img src="" alt="">
                <p>Add to Bag</p>
              </div>
            </div>
          </div>
          <!-- this will be a loop  -->
        </div>
      </div>
    </div>
  </div>
</template>