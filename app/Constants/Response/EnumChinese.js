'use strict';

const messages = {
  salutation_ch: ['先生', '小姐'],
  service_user_diet_ch: [' 正常', ' 碎餐', ' 糊餐'],
  service_user_eye_sight_ch: [' 正常視力', ' 部分視力受損', ' 全部視力受損'],
  service_user_hearing_ch: [' 正常', ' 部份失聰', ' 完全失聰'],
  service_user_lifting_ch: [
    ' 不需攙扶',
    ' 一人攙扶',
    ' 二人攙扶',
    ' 需要輔助器',
  ],
  service_user_language_ch: [' 廣東話', ' 普通話', ' 英文', ' 方言'],
  service_user_background_others_ch: [
    ' 裝有心律調節器',
    ' 吞嚥困難',
    ' 便秘',
    ' 藥物敏感 - 請註明',
    ' 暴力',
  ],
  service_user_assisting_device_ch: [
    ' 枵杖',
    ' 四腳拐杖',
    ' 助步車',
    ' 輪椅',
    ' 臥床',
  ],
  caregiver_type_ch: [
    ' 註冊護士',
    ' 登記護士',
    ' 保健員',
    ' 起居照顧員',
    ' 陪診員',
  ],
  location_ch: [
    ' 香港島',
    ' 中西區',
    ' 東區',
    ' 南區',
    ' 灣仔',
    ' 九龍',
    ' 深水埗',
    ' 九龍城',
    ' 觀塘',
    ' 黃大仙',
    ' 油尖旺',
    ' 新界',
    ' 離島',
    ' 葵青',
    ' 北區',
    ' 西貢',
    ' 沙田',
    ' 大埔',
    ' 荃灣',
    ' 屯門',
    ' 元朗',
  ],
  services_ch: {
    'Accompany to Walk Around / Do Mild Exercise': '陪伴散步 / 輕鬆運動',
    'Bathing': '協助洗澡',
    'Lifting': '攙扶',
    'Toileting / Change Diapers / Clean Up Excretion':
      '協助如廁/換尿片/清理大小便',
    'Feeding (Non-tube feeding)': '餵食 (非以管餵食)',
    'Feed Medicine': '餵藥',
    'Measure Weight / Blood Pressure / Body Temperature':
      '磅重 / 量血壓 / 測體溫',
    'Oral Care': '口腔清潔',
    'Measure Blood glucose': '驗血糖',
    'Insulin injection': '打糖尿針',
    'Injection* (Intramuscular / Intravenous)': '注射藥物 * (肌肉 / 靜脈注射)',
    'Oxygen Therapy': '氧氣治療',
    'Change Urine Bags / Fecal Bags': '更換尿袋 / 便袋',
    'Stoma Care': '造口護理',
    'Nasogastric Tube Feeding': '鼻胃管餵食',
    'PEG Feeding / Gauze and Tape Dressing': '胃造廔(PEG)餵食 / 更換紗布',
    'Peritoneal Dialysis / Catheter (Soft Tube) Care':
      '腹膜透析 (洗肚/洗肚管護理)',
    'Wound Care': '傷口護理',
    'Change Foley Catheter*': '更換尿喉*',
    'Change SPC (Supra-pubic Catheter)*': '更換恥骨上導尿管(SPC)*',
    'Tracheostomy Care*': '氣管造口護理*',
    'Memory Training / Cognitive Training / Behavioural Treatment':
      '記憶力訓練 / 認知訓練 / 行為治療',
    'Change Nasogastric / Gastrostomy Tube*': '更換鼻胃管 / 胃造廔(PEG)*',
    'Sputum Suction*': '抽痰*',
    'Use Ventilator*': '協助使用呼吸機*',
    'Cut Nails': '剪指腳甲',
    'Accompany to see Doctor / Pick up at Home / Lend an Arm / Registration / Booking / Collect Medicine':
      '陪診 /上門接送 / 攙扶、登記、預約及排隊取藥',
  },
  selfCareAbilities_ch: {
    'Toileting': '如廁',
    'No help needed': '不需幫助',
    'Need help': '要幫助',
    'Toileting Equipment': '廁所設備',
    'Use commode chair': '要座廁椅',
    'Use potty': '要便壺',
    'Need to change diapers': '更換尿片',
    'Need to change foley catheter': '要換尿喉',
    'Use bath chair': '用洗澡椅',
    'Shower': '洗澡',
  },
  illness_ch: {
    'Asthma': '哮喘',
    'Cancer': '癌症',
    'Dementia': '腦退化症',
    'Diabetes': '糖尿病',
    'Epilepsy': '癲癇症',
    'Fracture': '骨折',
    'Wrist': '手腕',
    'Finger': '手指',
    'Upper Arm': '上臂',
    'Lower Arm': '下臂',
    'Lower Body': '下半身',
    'Feet': '腳',
    'Gout': '痛風',
    'Heart Failure': '心臟衰竭',
    'Hepatitis': '肝炎',
    'Type A': '甲形',
    'Type B': '乙形',
    'Type C': '丙形',
    'Do not know': '不知道',
    'Stroke': '中風',
    'Parkinsonism': '柏金遜症',
    'Scabies': '疥瘡',
    'Total Knee Replacement': '膝關節置換手術',
  },
  additional_ch: {
    'None': '沒有',
    'between': '由',
    'and': '至',
    'hour(s)': '小時',
    'Dialect': '方言',
    'Cancer': '癌症',
    'Others': '其他',
    'Drug Allergy': '藥物敏感',
    'Floor Number': '層',
    'Flat Number': '室',
  },
};
module.exports = messages;
