/**
 * Will support multiple language in the future
 * currently set to Indonesian
**/

import React from 'react'; // temporary, while we still having JSX in WELCOME const

export const CommonWords = {
  BRAND_NAME: 'Buké',
  BOOK: 'pesan',
  BOUQUET: 'buket',
  CARD: 'kartu',
  DELIVERY: 'pengiriman',
  CUSTOMER: 'pemesan',
};

export const HomePageWords = {
  WELCOME: <span>Jadikan momen<br/>berharganya<br/>lebih indah</span>,
  ROMANTIC: 'romantis',
  GRADUATION: 'wisuda',
  WEDDING: 'wedding',
  DECORATION: 'dekor',
  ANY_OCCASION: 'momen lainnya',
  BUDGET: 'budget',
  BACK_TO_TOP: 'kembali ke awal',
}
export const CardFormWords = {
  GREETING_CARD: 'kartu ucapan',
  DONT_USE_CARD: 'Tidak perlu kartu',
  REQUEST_BLANK_CARD: 'Mohon berikan kartu kosong',
  NEXT: 'berikutnya', // 'kirim!', //wrap it!
}

export const DeliveryFormWords = {
  DELIVERY: 'pengiriman',
  DELIVERY_ADDRESS: 'Alamat Pengiriman',
  RECIPIENT_NAME: 'Nama Penerima',
  RECIPIENT_PHONE: 'No Telp Penerima',
  DELIVERY_DATE: 'Tanggal Pengiriman',
  DELIVERY_TIME: 'Waktu Tiba',
  DELIVERY_INSTRUCTION: 'Keterangan Tambahan',
  WE_WILL_TRY_OUR_BEST: 'Kami akan berusaha memenuhi permintaan Anda sebisa kami tanpa menjanjikan apapun',
  PROCEED: 'lanjutkan',
}

export const CustomerFormWords = {
  SENDER_DETAIL: 'Detil Pengirim',
  SENDER_NAME: 'Nama Pengirim',
  SENDER_PHONE: 'No Telp Pengirim',
  BILLING_EMAIL: 'Email',
  PLACE_ORDER: 'pesan',
}

export const ThankYouForOrderWords = {
  THANK_YOU: 'Terima kasih telah mempercayakan momen berharga Anda kepada kami',
  BACK_TO_HOME: 'Kembali ke awal',
}
