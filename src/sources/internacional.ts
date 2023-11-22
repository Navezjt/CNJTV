import { SourcesMap } from '.';

const argentinaSources: SourcesMap = {
  tn: {
    slug: 'tn',
    name: 'Todonoticias',
    youtubeChannelId: 'UCj6PcyLvpnIRT_2W_mwa9Aw',
    flag: 'ar'
  },
  c5n: {
    slug: 'c5n',
    name: 'C5N',
    youtubeChannelId: 'UCFgk2Q2mVO1BklRQhSv6p0w',
    flag: 'ar'
  },
  'america-tv': {
    slug: 'america-tv',
    name: 'América TV',
    youtubeChannelId: 'UC6NVDkuzY2exMOVFw4i9oHw',
    flag: 'ar'
  },
  'net-tv': {
    slug: 'net-tv',
    name: 'Net TV',
    iframeSrc: 'https://rudo.video/live/nettv?volume=0&mute=1',
    fuente: 'https://www.canalnet.tv/page/senal-en-vivo',
    flag: 'ar'
  },
  'tv-publica-arg': {
    slug: 'tv-publica-arg',
    name: 'Televisión Pública',
    // youtubeChannelId: 'UCs231K71Bnu5295_x0MB5Pg',
    m3u8Url: 'https://cntlnk-main-edge-access.secure.footprint.net/entrypoint/c7_vivo01_dai_source-20001_all_720p.m3u8',
    flag: 'ar'
  },
  'cronica-tv': {
    slug: 'cronica-tv',
    name: 'Crónica TV',
    youtubeChannelId: 'UCT7KFGv6s2a-rh2Jq8ZdM1g',
    flag: 'ar'
  },
  'el-siete-tv': {
    slug: 'el-siete-tv',
    name: 'El Siete TV',
    youtubeChannelId: 'UC64ZNqX0FQHabP8iIkmnR3A',
    flag: 'ar'
  },
  a24: {
    slug: 'a24',
    name: 'A24',
    youtubeChannelId: 'UCR9120YBAqMfntqgRTKmkjQ',
    flag: 'ar'
  },
  'la-nacion': {
    slug: 'la-nacion',
    name: 'LA NACION',
    youtubeChannelId: 'UCba3hpU7EFBSk817y9qZkiA',
    flag: 'ar'
  },
  'ip-digital': {
    slug: 'ip-digital',
    name: 'Información Periodistica',
    m3u8Url:
      'https://d1nmqgphjn0y4.cloudfront.net/live/ip/live.isml/5ee6e167-1167-4a85-9d8d-e08a3f55cff3.m3u8',
    fuente: 'https://ip.digital/vivo',
    flag: 'ar'
  },
  'ip-digital-0': {
    slug: 'ip-digital-0',
    name: 'Información Periodistica',
    m3u8Url:
      'https://d1nmqgphjn0y4.cloudfront.net/live/ip/live.isml/5ee6e167-1167-4a85-9d8d-e08a3f55cff3.m3u8?PlaylistM3UCL',
    fuente: 'https://ip.digital/vivo',
    flag: 'ar'
  },
  'ip-digital-2': {
    slug: 'ip-digital-2',
    name: 'IP Noticias',
    youtubeChannelId: 'UC1bBjOZieJWHbsFA0LwjjJA',
    flag: 'ar'
  }
};

const colombiaSources: SourcesMap = {
  'el-tiempo': {
    slug: 'el-tiempo',
    name: 'EL TIEMPO',
    youtubeChannelId: 'UCe5-b0fCK3eQCpwS6MT0aNw',
    flag: 'co'
  },
  'noti-caracol': {
    slug: 'noti-caracol',
    name: 'Noticias Caracol',
    youtubeChannelId: 'UC2Xq2PK-got3Rtz9ZJ32hLQ',
    flag: 'co'
  },
  'red-mas-noticias1': {
    slug: 'red-mas-noticias1',
    name: 'RED MÁS Noticias1',
    m3u8Url: 'https://inforedvos.lcdn.claro.net.co/Content/HLS_HLS_DIR/Live/channel(REDMASHDWEB)/master.m3u8',
    fuente: 'https://redmas.com.co/senal-en-vivo/',
    flag: 'co'
  },
  'red-mas-noticias': {
    slug: 'red-mas-noticias',
    name: 'RED MÁS Noticias',
    youtubeChannelId: 'UCpcvsK0UAI3MIHsjjj3CgMg',
    flag: 'co'
  }
};

const peruSources: SourcesMap = {
  'tv-peru': {
    slug: 'tv-peru',
    name: 'TVPerú Noticias',
    youtubeChannelId: 'UCkZCoc42IipR1ucqJmIehsA',
    flag: 'pe'
  },
  'autentica-tv': {
    slug: 'autentica-tv',
    name: 'autentica TV',
    m3u8Url:
      'https://live.obslivestream.com/autenticatvmux/tracks-v2a1/mono.m3u8',
    fuente: 'https://autenticatv.pe/',
    flag: 'pe'
  },
  'panamericana-tv': {
    slug: 'panamericana-tv',
    name: 'Panamericana TV',
    iframeSrc:
      'https://geo.dailymotion.com/player/x5poh.html?video=x774s7s&autoplay=true&volume=0',
    fuente: 'https://panamericana.pe/tvenvivo',
    flag: 'pe'
  },
  'onda-digital-tv': {
    slug: 'onda-digital-tv',
    name: 'Onda Digital TV',
    m3u8Url: 'https://v4.tustreaming.cl:443/ondadigitaltv/index.m3u8',
    fuente: 'https://ondadigitaltv.com',
    flag: 'pe'
  },
  Radiotropical: {
    slug: 'Radiotropical',
    name: 'Radiotropical',
    m3u8Url: 'https://videoserver.tmcreativos.com:19360/raditropical/raditropical.m3u8',
    fuente: 'https://radiotropical.pe/television/',
    flag: 'pe'
  },
  Doblec: {
    slug: 'Doblec',
    name: 'Doble c',
    m3u8Url: 'https://videoserver.tmcreativos.com:19360/raditropical/raditropical.m3u8',
    fuente: 'https://doblectelevision.com/',
    flag: 'pe'
  },
  'Antarestvradio': {
    slug: 'Antarestvradio',
    name: 'Antarestvradio',
    srcUrl:
      'http://www.ujjina.com/cdn/antarestv.html',
    fuente: 'http://antarestvradio.com/',
    flag: 'pe'
  },
  atv: {
    slug: 'atv',
    name: 'ATV',
    m3u8Url:
      'https://d3krdjs7is1y42.cloudfront.net/ATVpe/df13ed57843877b21ad969184ab6888f.sdp/playlist.m3u8',
    fuente: 'https://www.atv.pe/envivo-atv',
    flag: 'pe'
  },
  'atv-mas': {
    slug: 'atv-mas',
    name: 'ATV Más',
    m3u8Url:
      'https://d3krdjs7is1y42.cloudfront.net/ATVmas/74ee4169b59e6f987ae3d77317309109.sdp/playlist.m3u8',
    fuente: 'https://www.atv.pe/envivo-atvmas',
    flag: 'pe'
  },
  'la-republica': {
    slug: 'la-republica',
    name: 'La República',
    youtubeChannelId: 'UC-B7Xv56uNRDkj0vC3QW8Cg',
    flag: 'pe'
  },
  willax: {
    slug: 'willax',
    name: 'Willax',
    iframeSrc:
      'https://geo.dailymotion.com/player/x5poh.html?video=x7x4dgx&autoplay=true&volume=0',
    fuente: 'https://willax.tv/en-vivo/',
    flag: 'pe'
  },
  'latina-noticias': {
    slug: 'latina-noticias',
    name: 'Latina Noticias',
    youtubeChannelId: 'UCpSJ5fGhmAME9Kx2D3ZvN3Q',
    flag: 'pe'
  },
  'ovacion-tv': {
    slug: 'ovacion-tv',
    name: '📻 Ovación TV',
    m3u8Url:
      'https://5c3fb01839654.streamlock.net:1963/iptvovacion1/liveovacion1tv/playlist.m3u8',
    fuente: 'https://ovacion.pe/radio',
    flag: 'pe'
  },
  'pbo-radio': {
    slug: 'pbo-radio',
    name: '📻 PBO',
    youtubeChannelId: 'UCgR0st4ZLABi-LQcWNu3wnQ',
    flag: 'pe'
  },
  'santa-rosa': {
    slug: 'santa-rosa',
    name: '📻 Radio Santa Rosa',
    youtubeChannelId: 'UCIGV0oiNkdK2-tnf10DNp2A',
    flag: 'pe'
  },
  'san-borja': {
    slug: 'san-borja',
    name: '📻 Radio San Borja Tv',
    m3u8Url:
      'https://5c3fb01839654.streamlock.net:1963/iptvsanborja/livesanborjatv/playlist.m3u8',
    fuente: 'https://radiosanborjatv.com/',
    flag: 'pe'
  },
  'radio-onda-digital': {
    slug: 'radio-onda-digital',
    name: '📻 Radio Onda Digital',
    m3u8Url: 'https://tv.ondadigital.pe:1936/ondatv2/ondatv2/playlist.m3u8',
    fuente: 'https://www.ondadigital.pe/',
    flag: 'pe'
  },
  'rcr': {
    slug: 'rcr',
    name: '📻 Radio RCR',
    m3u8Url:
      'https://5c3fb01839654.streamlock.net:1963/iptvrcrperu/livercrperutv/chunklist_w249757421.m3u8',
    fuente: 'https://www.rcrperu.com/radio-en-vivo/',
    flag: 'pe'
  },
  'radio-uno': {
    slug: 'radio-uno',
    name: '📻 Radio Uno',
    youtubeChannelId: 'UCK0lpuL9PQb3I5CDcu7Y7bA',
    flag: 'pe'
  }
};

const venezuelaSources: SourcesMap = {
  globovision: {
    slug: 'globovision',
    name: 'Globovisión En Vivo',
    youtubeChannelId: 'UCfJtBtmhnIyfUB6RqXeImMw',
    flag: 've'
  },
  'vpl': {
    slug: 'vpl',
    name: 'VPL',
    m3u8Url:
      'https://streannlivevpi.cachefly.net/Protected/sp=1;dirmatch=true;ip=179.6.168.55/07be233ae2ee3239c5d2f6c6c05aea8322773a66ece55e6df5c8d2ea4c783149/vpi1/vpi1/chunks.m3u8',
    fuente: 'https://vpitv.com/en-vivo/',
    flag: 've'
  },
  vpitv: {
    slug: 'vpitv',
    name: 'VPItv',
    youtubeChannelId: 'UCVFiIRuxJ2GmJLUkHmlmj4w',
    flag: 've'
  },
  'telesur': {
    slug: 'telesur',
    name: 'telesur',
    m3u8Url:
      'https://cdnesmain.telesur.ultrabase.net/mbliveMain/hd/playlist.m3u8',
    fuente: 'https://www.telesurtv.net/',
    flag: 've'
  },
  'telesur-tv': {
    slug: 'telesur-tv',
    name: 'teleSUR tv',
    youtubeChannelId: 'UCbHFKMtqLYkIBRiPHJwxu_w',
    flag: 've'
  }
};
const mexicoSources: SourcesMap = {
  MILENIO: {
    slug: 'MILENIO',
    name: 'MILENIO',
    youtubeChannelId: 'UCFxHplbcoJK9m70c4VyTIxg',
    flag: 'mx'
  }
};
const hondurasSources: SourcesMap = {
  'hch-vivo': {
    slug: 'hch-vivo',
    name: 'HCH En Vivo',
    youtubeChannelId: 'UCIs6fmAXOI1K2jgkoBdWveg',
    flag: 'hn'
  }
};
const espanaSources: SourcesMap = {
  rtve: {
    slug: 'rtve',
    name: 'RTVE Noticias',
    youtubeChannelId: 'UC7QZIf0dta-XPXsp9Hv4dTw',
    flag: 'es'
  },
  'cnn-español': {
    slug: 'cnn-español',
    name: 'CNN en Español',
    youtubeChannelId: 'UC_lEiu6917IJz03TnntWUaQ',
    flag: 'es'
  }
};
const brasilSources: SourcesMap = {
  'cnn-brasil': {
    slug: 'cnn-brasil',
    name: 'CNN Brasil',
    youtubeChannelId: 'UCvdwhh_fDyWccR42-rReZLw',
    flag: 'br'
  },
  'cnn-brasil2': {
    slug: 'cnn-brasil2',
    name: 'cnn brasil 2',
    srcUrl:
      'https://www.youtube.com/embed/4wpDjhfzzvg?enablejsapi=1&autoplay=1&embed_config=%7B%22adsConfig%22%3A%7B%22adTagParameters%22%3A%7B%22iu%22%3A%22%2F21920083859%2Fweb%2Fheader-aovivo%22%2C%22pmnd%22%3A0%2C%22pmxd%22%3A30000%2C%22pmad%22%3A2%7D%7D%2C%22relatedChannels%22%3A%5B%22UC6WLCEXdr_IU4DB5V7sPkzw%22%2C%22UC7f35v8GI1O_f6x2PfeOutQ%22%2C%22UCbrVBUVa2bwYRofc-lVeAnA%22%5D%7D&origin=https://www.cnnbrasil.com.br&widgetid=1',
    fuente: 'https://www.cnnbrasil.com.br/',
    flag: 'br'
  }
};
const usaSources: SourcesMap = {
  'cnn-us': {
    slug: 'cnn-us',
    name: 'CNN US',
    m3u8Url:
      'https://turnerlive.warnermediacdn.com/hls/live/586495/cnngo/cnn_slate/VIDEO_0_3564000.m3u8',
    fuente: 'https://us.cnn.com',
    flag: 'us'
  },
  telemundo: {
    slug: 'telemundo',
    name: 'Noticias Telemundo',
    youtubeChannelId: 'UCRwA1NUcUnwsly35ikGhp0A',
    flag: 'us'
  },
  'telemundo2': {
    slug: 'telemundo2',
    name: 'telemundo 2',
    m3u8Url:
      'http://45.166.92.22:58001/play/a00r/index.m3u8',
    fuente: 'https://www.telemundo.com/',
    flag: 'us'
  },
  'sky-news2': {
    slug: 'sky-news2',
    name: 'sky news 2',
    m3u8Url:
      'https://linear021-gb-hls1-prd-ak.cdn.skycdp.com/Content/HLS_001_sd/Live/channel(skynews)/05_hd30.m3u8',
    fuente: 'https://news.sky.com/watch-live',
    flag: 'us'
  },
  'sky-news': {
    slug: 'sky-news',
    name: 'Sky News',
    youtubeChannelId: 'UCoMdktPbSTixAyNGwb-UYkQ',
    flag: 'us'
  },
  newsmax: {
    slug: 'newsmax',
    name: 'Newsmax',
    youtubeChannelId: 'UCx6h-dWzJ5NpAlja1YsApdg',
    flag: 'us'
  },
  'fox-news-now': {
    slug: 'fox-news-now',
    name: 'NewsNOW from FOX',
    youtubeChannelId: 'UCJg9wBPyKMNA5sRDnvzmkdg',
    flag: 'us'
  },
  'fox-news-now2': {
    slug: 'fox-news-now2',
    name: 'NewsNOW from FOX 2',
    m3u8Url:
      'https://dcs-live-ue4.mp.lura.live/server/play/5Awwm3GfagVzfpdA/rendition.m3u8?track=video-3&anvsid=m177635096-n6a32b0668377e22cc524226431dd3029&ts=1700692664&anvtrid=a9e2fc2825c5107998a8871e718f3fac',
    fuente: 'https://www.livenowfox.com/',
    flag: 'us'
  },
  'abc7': {
    slug: 'abc7',
    name: 'ABC7',
    m3u8Url:
      'https://content.uplynk.com/channel/ext/2118d9222a87420ab69223af9cfa0a0f/kabc_24x7_news.m3u8?ad._v=2&ad.preroll=0&ad.fill_slate=1&ad.ametr=1&ad.vid=otv-11316941',
    fuente: 'https://abc7.com/',
    flag: 'us'
  },
  abc7: {
    slug: 'abc7',
    name: 'ABC7',
    youtubeChannelId: 'UCVxBA3Cbu3pm8w8gEIoMEog',
    flag: 'us'
  },
  'abc7-swfl': {
    slug: 'abc7-swfl',
    name: 'ABC7 SWFL',
    youtubeChannelId: 'UCq9e_hCv2jvgck8WowW1NXg',
    flag: 'us'
  },
  nbcla: {
    slug: 'nbcla',
    name: 'NBCLA',
    youtubeChannelId: 'UCSWoppsVL0TLxFQ2qP_DLqQ',
    flag: 'us'
  },
  'nbc-news': {
    slug: 'nbc-news',
    name: 'NBC News',
    youtubeChannelId: 'UCeY0bbntWzzVIaj2z3QigXg',
    flag: 'us'
  },
  'record-news': {
    slug: 'record-news',
    name: 'Record News',
    youtubeChannelId: 'UCuiLR4p6wQ3xLEm15pEn1Xw',
    fuente: 'https://www.youtube.com/@recordnews',
    flag: 'us'
  },
  'abc-news': {
    slug: 'abc-news',
    name: 'ABC News',
    m3u8Url:
      ' https://content.uplynk.com/channel/3324f2467c414329b3b0cc5cd987b6be.m3u8',
    fuente: 'https://abcnews.go.com/Live',
    flag: 'us'
  }
};
const franciaSources: SourcesMap = {
  'euronews-esp': {
    slug: 'euronews-esp',
    name: 'euronews (Español)',
    youtubeChannelId: 'UCyoGb3SMlTlB8CLGVH4c8Rw',
    flag: 'fr'
  },
  'euronews-eng': {
    slug: 'euronews-eng',
    name: 'euronews (English)',
    youtubeChannelId: 'UCSrZ3UV4jOidv8ppoVuvW9Q',
    flag: 'fr'
  },
  'euronews-rus': {
    slug: 'euronews-rus',
    name: 'euronews Русский',
    youtubeChannelId: 'UCFzJjgVicCtFxJ5B0P_ei8A',
    flag: 'fr'
  },
  'euronews-hun': {
    slug: 'euronews-hun',
    name: 'euronews (magyarul)',
    youtubeChannelId: 'UC4Ct8gIf9f0n4mdyGsFiZRA',
    flag: 'fr'
  },
  'france-24-esp': {
    slug: 'france-24-esp',
    name: 'FRANCE 24 Español',
    youtubeChannelId: 'UCUdOoVWuWmgo1wByzcsyKDQ',
    flag: 'fr'
  },
  'france-24-eng': {
    slug: 'france-24-eng',
    name: 'FRANCE 24 English',
    youtubeChannelId: 'UCQfwfsi5VrQ8yKZ-UWmAEFg',
    flag: 'fr'
  },
  'france-24-fra': {
    slug: 'france-24-fra',
    name: 'FRANCE 24 French',
    m3u8Url: 'https://static.france24.com/live/F24_FR_HI_HLS/live_tv.m3u8',
    fuente: 'https://www.france24.com/fr/direct',
    flag: 'fr'
  },
  'france-info': {
    slug: 'france-info',
    name: 'franceinfo',
    youtubeChannelId: 'UCO6K_kkdP-lnSCiO3tPx7WA',
    flag: 'fr'
  },
  lci: {
    slug: 'lci',
    name: 'LCI',
    m3u8Url: 'https://lci-hls-live-ssl.tf1.fr/lci/1/hls/live_2328.m3u8',
    fuente: 'https://www.tf1info.fr/direct/',
    flag: 'fr'
  }
};
const rusiaSources: SourcesMap = {
  'RT-español': {
    slug: 'RT-español',
    name: 'RT en Español',
    youtubeChannelId: 'UC2mtXUpAYLYJIZ2deSPhlqw',
    flag: 'ru'
  },
  'RT-vivo': {
    slug: 'RT-vivo',
    name: 'RT en vivo',
    youtubeChannelId: 'UCEIhICHOQOonjE6V0SLdrHQ',
    flag: 'ru'
  },
  'RT-News': {
    slug: 'RT-News',
    name: 'RT News',
    youtubeChannelId: 'UCpwvZwUam-URkxB7g4USKpg',
    flag: 'ru'
  },
  'RT-america': {
    slug: 'RT-america',
    name: 'RT America',
    youtubeChannelId: 'UCczrL-2b-gYK3l4yDld4XlQ',
    flag: 'ru'
  }
};
const chinaSources: SourcesMap = {
  'live-chino': {
    slug: 'live-chino',
    name: '民視直播 FTVN Live 53',
    youtubeChannelId: 'UClIfopQZlkkSpM1VgCFLRJA',
    flag: 'cn'
  },
  'live-chino-2': {
    slug: 'live-chino-2',
    name: '三立LIVE新聞',
    youtubeChannelId: 'UC2TuODJhC03pLgd6MpWP0iw',
    flag: 'cn'
  },
  'live-chino-3': {
    slug: 'live-chino-3',
    name: '三立iNEWS',
    youtubeChannelId: 'UCoNYj9OFHZn3ACmmeRCPwbA',
    flag: 'cn'
  },
  'live-chino-4': {
    slug: 'live-chino-4',
    name: '中視新聞 HD直播頻道',
    youtubeChannelId: 'UCmH4q-YjeazayYCVHHkGAMA',
    flag: 'cn'
  },
  'live-chino-5': {
    slug: 'live-chino-5',
    name: '華視新聞 CH52',
    youtubeChannelId: 'UCDCJyLpbfgeVE9iZiEam-Kg',
    flag: 'cn'
  },
  'live-chino-6': {
    slug: 'live-chino-6',
    name: '中天電視',
    youtubeChannelId: 'UC5l1Yto5oOIgRXlI4p4VKbw',
    flag: 'cn'
  }
};
const variosSources: SourcesMap = {
  dw: {
    slug: 'dw',
    name: 'DW Español',
    youtubeChannelId: 'UCT4Jg8h03dD0iN3Pb5L0PMA'
  },
  'trt-world': {
    slug: 'trt-world',
    name: 'TRT World',
    youtubeChannelId: 'UC7fWeaHhqgM4Ry-RMpM2YYw'
  },
  'al-jazeera': {
    slug: 'al-jazeera',
    name: 'Al Jazeera English',
    youtubeChannelId: 'UCNye-wNBqNL5ZzHSJj3l8Bg'
  },
  'al-jazeera-arabe': {
    slug: 'al-jazeera-arabe',
    name: 'AlJazeera Channel قناة الجزيرة',
    youtubeChannelId: 'UCfiwzLy-8yKzIbsmZTzxDgw'
  },
  cna: {
    slug: 'cna',
    name: 'CNA',
    youtubeChannelId: 'UC83jt4dlz1Gjl58fzQrrKZg'
  },
  'news-nigeria': {
    slug: 'news-nigeria',
    name: 'TVC News Nigeria',
    youtubeChannelId: 'UCgp4A6I8LCWrhUzn-5SbKvA'
  },
  'HK-apple-daily': {
    slug: 'HK-apple-daily',
    name: 'HK Apple Daily',
    youtubeChannelId: 'UCeqUUXaM75wrK5Aalo6UorQ'
  },
  'live-japones': {
    slug: 'live-japones',
    name: 'ANNnewsCH',
    youtubeChannelId: 'UCGCZAYq5Xxojl_tSXcVJhiQ'
  },
  'abc-news-au': {
    slug: 'abc-news-au',
    name: 'ABC News AU',
    m3u8Url:
      ' https://abc-iview-mediapackagestreams-2.akamaized.net/out/v1/6e1cc6d25ec0480ea099a5399d73bc4b/index.m3u8',
    fuente: 'https://www.abc.net.au/news/'
  }
};

export const internacionalSources: SourcesMap = {
  ...argentinaSources,
  ...colombiaSources,
  ...peruSources,
  ...venezuelaSources,
  ...mexicoSources,
  ...hondurasSources,
  ...espanaSources,
  ...brasilSources,
  ...usaSources,
  ...franciaSources,
  ...rusiaSources,
  ...chinaSources,
  ...variosSources
};
