<script setup lang="ts">
import { useDialogStore } from '~/stores/dialog'
const dialog = useDialogStore()
let state = reactive({
  showDialog: false
})
let products = reactive([
  {
    id: 1,
    productName: 'Chaldal Premium Beef Mixed Cut Bone In ± 50 gm',
    productNameBn: 'চালডাল প্রিমিয়াম গরুর মাংস মিশ্রিত হাড়যুক্ত ± ৫০ গ্রাম ১ কেজি',
    imageUrl: '',
    price: '800',
    oldPrice: '850',
    quantity: '1 kg',
    options: {
      overlay: false
    }
  },
  {
    id: 2,
    productName: 'Harpic Liquid Toilet Cleaner 750 ml & Bathroom Cleaning Powder 400 gm (Combo Offer)',
    productNameBn: 'হারপিক লিকুইড টয়লেট ক্লিনার ৭৫০ মিলি এবং বাথরুম ক্লিনিং পাউডার ৪০০ গ্রাম (কম্বো অফার) ২ টি',
    imageUrl: '',
    price: '240',
    oldPrice: '',
    quantity: '2 pcs',
    options: {
      overlay: false
    }
  },
  {
    id: 3,
    productName: 'Deshi Gajor (Local Carrot) ± 25 gm',
    productNameBn: 'গাজর দেশি ± ২৫ গ্রাম ৫০০ গ্রাম',
    imageUrl: '',
    price: '45',
    oldPrice: '49',
    quantity: '1 kg',
    options: {
      overlay: false
    }
  },
  {
    id: 4,
    productName: 'Aarong Dairy Pasteurized Liquid Milk',
    productNameBn: 'আড়ং ডেইরি পাস্তুরিত তরল দুধ ১ লিটার',
    imageUrl: '',
    price: '95',
    oldPrice: '',
    quantity: '500g',
    options: {
      overlay: false
    }
  },
  {
    id: 5,
    productName: 'Guava Premium (± 50 gm)',
    productNameBn: 'পেয়ারা (নেট ওজন ± ৫০ গ্রাম ) ১ কেজি',
    imageUrl: '',
    price: '79',
    oldPrice: '90',
    quantity: '1 kg',
    options: {
      overlay: false
    }
  },
  {
    id: 6,
    productName: 'Arla Dano Daily Pushti Milk Powder',
    productNameBn: 'আরলা ডানো ডেইলি পুষ্টি  গুঁড়া দুধ ৫০০ গ্রাম',
    imageUrl: '',
    price: '380',
    oldPrice: '',
    quantity: '500g',
    options: {
      overlay: false
    }
  },
  {
    id: 7,
    productName: 'Nazirshail Rice Premium (Half Boiled) ± 50 gm',
    productNameBn: 'নাজিরশাইল চাল প্রিমিয়াম (আধা সিদ্ধ) ± ৫০ গ্রাম ৫ কেজি',
    imageUrl: '',
    price: '79',
    oldPrice: '85',
    quantity: '1 kg',
    options: {
      overlay: false
    }
  },
  {
    id: 8,
    productName: 'Red Tomato ± 25 gm',
    productNameBn: 'লাল টমেটো ± ২৫ গ্রাম ৫০০ গ্রাম',
    imageUrl: '',
    price: '30',
    oldPrice: '45',
    quantity: '1 kg',
    options: {
      overlay: false
    }
  }
])

const hover = (id, overlay = false) => {
  const index = products.findIndex((obj) => obj.id == id)
  products[index].options.overlay = overlay
}

const showProductDetails = () => {
  dialog.updateDetailsDialogStatus(true)
}

</script>
<template>
  <div>
    <div class="section">
      <div class="section-head">
        <div class="breadcrumb">জনপ্রিয়</div>
      </div>
      <div class="section-body">
        <div class="section-content">
          <!-- this will be a loop  -->
          <div class="section-item-wrapper" v-for="item in products" :key="item.id">
            <div class="section-item" @mouseenter="hover(item.id, true)" @mouseleave="hover(item.id)">
              <div class="section-product">
                <div class="product-img">
                  <img :src="`frontend/popular/${item.id}.jpg`" alt="No Image">
                </div>
                <div class="product-name">
                  {{ $i18n.locale == 'en' ? item.productName : item.productNameBn }}
                </div>
                <div class="overlay" :class="item.options.overlay ? 'show' : ''">
                  <div class="product-manage-cart">
                    <!-- <div class="add-text">
                          Add to shopping bag
                        </div> -->
                    <div class="cart-content">
                      <div class="amount">
                        ৳ 1200
                      </div>
                      <div class="manage-quantity">
                        <div class="remove">
                          <p>-</p>
                        </div>
                        <div class="quantity">
                          1
                        </div>
                        <div class="add">
                          <p>+</p>
                        </div>
                      </div>
                      <div class="status">
                        In Bag
                      </div>
                    </div>
                  </div>
                  <div class="product-details" @click="showProductDetails">
                    {{ $t('product.details') }} >>
                  </div>
                </div>
              </div>

              <div class="section-price">
                <span class="new-price">৳ {{ item.price }}</span>
                <span v-show="item.oldPrice" class="old-price">৳ {{ item.oldPrice }}</span>
              </div>
            </div>
            <div class="section-btn">
              <img src="~/assets/icons/add.png" alt="">
              <p>{{ $t('cart.addToBag') }}</p>
            </div>
          </div>
          <!-- this will be a loop  -->
        </div>
      </div>
    </div>
    <!-- Details modal for each product -->
    <Modal v-show="dialog.getDetailsDialogStatus" :width="900" :height="700" :header="'Product Details'"></Modal>
    <!-- Details modal for each product -->
  </div>
</template>