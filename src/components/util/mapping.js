const numtoWordsMap = {
  1: {
    sino: '일',
    pure: '하나',
  },
  2: {
    sino: '이',
    pure: '둘',
  },
  3: {
    sino: '삼',
    pure: '셋',
  },
  4: {
    sino: '사',
    pure: '넷',
  },
  5: {
    sino: '오',
    pure: '다섯',
  },
  6: {
    sino: '육',
    pure: '여섯',
  },
  7: {
    sino: '칠',
    pure: '일곱',
  },
  8: {
    sino: '팔',
    pure: '여덟',
  },
  9: {
    sino: '구',
    pure: '아홉',
  },
  10: {
    sino: '십',
    pure: '열',
  },
  11: {
    sino: '십일',
    pure: '열하나',
  },
  12: {
    sino: '십이',
    pure: '열둘',
  },
  13: {
    sino: '십삼',
    pure: '열셋',
  },
  14: {
    sino: '십사',
    pure: '열넷',
  },
  15: {
    sino: '십오',
    pure: '열다섯',
  },
  16: {
    sino: '십육',
    pure: '열여섯',
  },
  17: {
    sino: '십칠',
    pure: '열일곱',
  },
  18: {
    sino: '십팔',
    pure: '열여덟',
  },
  19: {
    sino: '십구',
    pure: '열아홉',
  },
  20: {
    sino: '이십',
    pure: '스물',
  },
  21: {
    sino: '이십일',
    pure: '스물하나',
  },
  22: {
    sino: '이십이',
    pure: '스물둘',
  },
  23: {
    sino: '이십삼',
    pure: '스물셋',
  },
  24: {
    sino: '이십사',
    pure: '스물넷',
  },
  25: {
    sino: '이십오',
    pure: '스물다섯',
  },
  26: {
    sino: '이십육',
    pure: '스물여섯',
  },
  27: {
    sino: '이십칠',
    pure: '스물일곱',
  },
  28: {
    sino: '이십팔',
    pure: '스물여덟',
  },
  29: {
    sino: '이십구',
    pure: '스물아홉',
  },
  30: {
    sino: '삼십',
    pure: '서른',
  },
  31: {
    sino: '삼십일',
    pure: '서른하나',
  },
  32: {
    sino: '삼십이',
    pure: '서른둘',
  },
  33: {
    sino: '삼십삼',
    pure: '서른셋',
  },
  34: {
    sino: '삼십사',
    pure: '서른넷',
  },
  35: {
    sino: '삼십오',
    pure: '서른다섯',
  },
  36: {
    sino: '삼십육',
    pure: '서른여섯',
  },
  37: {
    sino: '삼십칠',
    pure: '서른일곱',
  },
  38: {
    sino: '삼십팔',
    pure: '서른여덟',
  },
  39: {
    sino: '삼십구',
    pure: '서른아홉',
  },
  40: {
    sino: '사십',
    pure: '마흔',
  },
  41: {
    sino: '사십일',
    pure: '마흔하나',
  },
  42: {
    sino: '사십이',
    pure: '마흔둘',
  },
  43: {
    sino: '사십삼',
    pure: '마흔셋',
  },
  44: {
    sino: '사십사',
    pure: '마흔넷',
  },
  45: {
    sino: '사십오',
    pure: '마흔다섯',
  },
  46: {
    sino: '사십육',
    pure: '마흔여섯',
  },
  47: {
    sino: '사십칠',
    pure: '마흔일곱',
  },
  48: {
    sino: '사십팔',
    pure: '마흔여덟',
  },
  49: {
    sino: '사십구',
    pure: '마흔아홉',
  },
  50: {
    sino: '오십',
    pure: '쉰',
  },
  51: {
    sino: '오십일',
    pure: '쉰하나',
  },
  52: {
    sino: '오십이',
    pure: '쉰둘',
  },
  53: {
    sino: '오십삼',
    pure: '쉰셋',
  },
  54: {
    sino: '오십사',
    pure: '쉰넷',
  },
  55: {
    sino: '오십오',
    pure: '쉰다섯',
  },
  56: {
    sino: '오십육',
    pure: '쉰여섯',
  },
  57: {
    sino: '오십칠',
    pure: '쉰일곱',
  },
  58: {
    sino: '오십팔',
    pure: '쉰여덟',
  },
  59: {
    sino: '오십구',
    pure: '쉰아홉',
  },
  60: {
    sino: '육십',
    pure: '예순',
  },
  61: {
    sino: '육십일',
    pure: '예순하나',
  },
  62: {
    sino: '육십이',
    pure: '예순둘',
  },
  63: {
    sino: '육십삼',
    pure: '예순셋',
  },
  64: {
    sino: '육십사',
    pure: '예순넷',
  },
  65: {
    sino: '육십오',
    pure: '예순다섯',
  },
  66: {
    sino: '육십육',
    pure: '예순여섯',
  },
  67: {
    sino: '육십칠',
    pure: '예순일곱',
  },
  68: {
    sino: '육십팔',
    pure: '예순여덟',
  },
  69: {
    sino: '육십구',
    pure: '예순아홉',
  },
  70: {
    sino: '칠십',
    pure: '일흔',
  },
  71: {
    sino: '칠십일',
    pure: '일흔하나',
  },
  72: {
    sino: '칠십이',
    pure: '일흔둘',
  },
  73: {
    sino: '칠십삼',
    pure: '일흔셋',
  },
  74: {
    sino: '칠십사',
    pure: '일흔넷',
  },
  75: {
    sino: '칠십오',
    pure: '일흔다섯',
  },
  76: {
    sino: '칠십육',
    pure: '일흔여섯',
  },
  77: {
    sino: '칠십칠',
    pure: '일흔일곱',
  },
  78: {
    sino: '칠십팔',
    pure: '일흔여덟',
  },
  79: {
    sino: '칠십구',
    pure: '일흔아홉',
  },
  80: {
    sino: '팔십',
    pure: '여든',
  },
  81: {
    sino: '팔십일',
    pure: '여든하나',
  },
  82: {
    sino: '팔십이',
    pure: '여든둘',
  },
  83: {
    sino: '팔십삼',
    pure: '여든셋',
  },
  84: {
    sino: '팔십사',
    pure: '여든넷',
  },
  85: {
    sino: '팔십오',
    pure: '여든다섯',
  },
  86: {
    sino: '팔십육',
    pure: '여든여섯',
  },
  87: {
    sino: '팔십칠',
    pure: '여든일곱',
  },
  88: {
    sino: '팔십팔',
    pure: '여든여덟',
  },
  89: {
    sino: '팔십구',
    pure: '여든아홉',
  },
  90: {
    sino: '구십',
    pure: '아흔',
  },
  91: {
    sino: '구십일',
    pure: '아흔하나',
  },
  92: {
    sino: '구십이',
    pure: '아흔둘',
  },
  93: {
    sino: '구십삼',
    pure: '아흔셋',
  },
  94: {
    sino: '구십사',
    pure: '아흔넷',
  },
  95: {
    sino: '구십오',
    pure: '아흔다섯',
  },
  96: {
    sino: '구십육',
    pure: '아흔여섯',
  },
  97: {
    sino: '구십칠',
    pure: '아흔일곱',
  },
  98: {
    sino: '구십팔',
    pure: '아흔여덟',
  },
  99: {
    sino: '구십구',
    pure: '아흔아홉',
  },
  100: {
    sino: '백',
    pure: '백',
  },
}

export default numtoWordsMap;