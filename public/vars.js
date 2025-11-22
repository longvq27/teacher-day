const animalList = [
  'crow',
  'vaquita',
  'tamarin',
  'frog',
  'owl',
  'turtle',
  'oryx',
  'iguana',
  'seahorse',
  'armadillo',
  'sloth',
  'kakapo',
  'echidna',
  'penguin',
  'damselfly',
  'bear',
  'parrotfish',
  'camel',
  'butterfly',
  'ostrich',
  'panda',
  'tapir',
  'sifaka',
  'lynx',
  'rhino',
  'peccary',
  'okapi',
  'loris',
  'hirola',
  'drill',
]
// YES LIST
// 'crow', 'vaquita',  'owl', 'tamarin', 'frog', 'oryx', 'iguana',  'seahorse', 'armadillo', 'sloth',

//ANIMAL NAMES
const animalNames = [
  'Viên Phấn Trắng',
  'Bảng Đen',
  'Áo Dài 20/11',
  'Sổ Điểm',
  'Nét Chữ Đỏ',
  'Tiếng Trống Trường',
  'Bài Giảng Đầu Tiên',
  'Cặp Sách Nặng Trĩu',
  'Giờ Ra Chơi',
  'Buổi Chào Cờ',
  'Những Lời La Mắng',
  'Bài Kiểm Tra 15 Phút',
  'Soạn Bài Khuya',
  'Họp Phụ Huynh',
  'Giẻ Lau Bảng',
  'Tập Làm Văn',
  'Lần Đầu Được Khen',
  'Sân Trường Mùa Phượng',
  'Bài Văn Mẫu Của Cô',
  'Bài Toán Khó',
  'Những Câu Chuyện Ngoài Sách',
  'Ngày Mưa Đi Học',
  'Ngày Đầu Tiên Đi Học',
  'Tiết Sinh Hoạt Cuối Tuần',
  'Buổi Tổng Kết',
  'Bảng Thành Tích',
  'Nụ Cười Của Thầy Cô',
  'Tấm Thiệp 20/11',
  'Những Lần Thầy Cô Đỡ Ta Dậy',
  'Khoảnh Khắc Ra Trường',
]


// SCIENTIFIC NAMES
const animalScientificName = [
  'Khởi đầu hành trình chữ nghĩa',
  'Không gian của tri thức',
  'Hình ảnh trang trọng đặc trưng',
  'Ghi lại hành trình trưởng thành',
  'Những lần sửa sai đầy yêu thương',
  'Âm thanh ký ức tuổi học trò',
  'Khoảnh khắc ấn tượng đầu tiên',
  'Nặng tri thức, nặng hy vọng',
  'Những phút giây hồn nhiên',
  'Nghi lễ quen thuộc của trường lớp',
  'Kỷ luật để ta trưởng thành',
  'Thử thách nhỏ, bài học lớn',
  'Hy sinh thầm lặng của thầy cô',
  'Cầu nối giữa gia đình và nhà trường',
  'Biểu tượng giản dị mà thân thuộc',
  'Bài học cảm xúc đầu đời',
  'Khoảnh khắc tự hào không quên',
  'Mùa phượng đỏ đầy cảm xúc',
  'Bài học qua những câu chữ mẫu',
  'Giây phút thầy cô kiên nhẫn chờ ta hiểu',
  'Bài học từ cuộc sống thực',
  'Những ngày mưa đầy ấm áp',
  'Bỡ ngỡ ngày đầu đến lớp',
  'Khoảnh khắc sẻ chia cuối tuần',
  'Ngày đánh dấu sự trưởng thành',
  'Niềm vui ghi nhận nỗ lực',
  'Nụ cười đem lại sự an yên',
  'Tấm thiệp vụng về nhưng quý giá',
  'Những nâng đỡ trong hành trình lớn lên',
  'Giây phút khép lại đời học sinh',
]


// RANGE
const animalRange = [
  'Biểu tượng lớp học',
  'Không gian học tập',
  'Hình ảnh thầy cô',
  'Ghi chép – Theo dõi học tập',
  'Sửa lỗi – Định hướng',
  'Âm thanh ký ức',
  'Khoảnh khắc đáng nhớ',
  'Vật dụng học tập',
  'Kỷ niệm vui',
  'Nghi lễ trường học',
  'Kỷ luật & quan tâm',
  'Thử thách',
  'Hy sinh',
  'Giao tiếp gia đình',
  'Biểu tượng giản dị',
  'Bài học cảm xúc',
  'Ghi nhận',
  'Mùa học',
  'Bài giảng văn',
  'Bài học nhẫn nại',
  'Bài học cuộc sống',
  'Ký ức đi học',
  'Khoảnh khắc đầu đời',
  'Gắn kết lớp học',
  'Sự kiện cuối năm',
  'Ghi nhận thành tích',
  'Nụ cười thầy cô',
  'Tri ân',
  'Khoảnh khắc nâng đỡ',
  'Dấu mốc chia tay',
]


const animalCharity = Array(30).fill('<span></span>');


//SMASH COPY BEGIN
const animalCopyOne = [
  'Viên phấn trắng viết nên những chữ đầu tiên trong cuộc đời.',
  'Bảng đen – nơi cả thế giới thu nhỏ lại trong từng bài giảng.',
  'Tà áo dài 20/11 mang theo sự dịu dàng và kính trọng.',
  'Sổ điểm ghi lại từng bước tiến của học trò.',
  'Nét bút đỏ dạy ta sửa mình từng chút một.',
  'Âm thanh trống trường vang lên đánh thức ký ức xưa.',
  'Bài giảng đầu tiên luôn in sâu trong lòng học trò.',
  'Cặp sách nặng trĩu chứa cả niềm hy vọng của thầy cô.',
  'Giây phút ra chơi là niềm vui vô tư nhất.',
  'Buổi chào cờ kết nối cả thầy cô và học trò.',
  'Những lời mắng yêu giúp ta trưởng thành.',
  'Những bài kiểm tra ngắn nhưng đầy cảm xúc.',
  'Thầy cô thức khuya soạn bài không ai hay biết.',
  'Họp phụ huynh là lúc thầy cô thay ta nói điều khó nói.',
  'Giẻ lau bảng như xóa đi những lỗi sai mỗi ngày.',
  'Những bài tập làm văn nuôi dưỡng cảm xúc.',
  'Một lời khen có thể đổi cả tương lai.',
  'Sân trường mùa phượng gợi nhớ bao kỷ niệm.',
  'Bài văn mẫu khiến ta hiểu đời sâu sắc hơn.',
  'Bài toán khó dạy ta kiên trì.',
  'Những câu chuyện ngoài sách là bài học thật nhất.',
  'Ngày mưa đi học luôn đầy ấm áp.',
  'Ngày đầu tiên đi học là khởi đầu đáng nhớ.',
  'Tiết sinh hoạt giúp lớp trở nên gần nhau hơn.',
  'Buổi tổng kết đánh dấu một chặng đường.',
  'Bảng thành tích là niềm tự hào của thầy cô.',
  'Nụ cười thầy cô luôn an ủi học trò.',
  'Tấm thiệp 20/11 vụng về nhưng chân thành.',
  'Thầy cô nâng đỡ ta trong những lúc yếu lòng.',
  'Khoảnh khắc ra trường đọng lại mãi mãi.',
]


const animalCopyTwo = [
  'Viên phấn nhỏ bé nhưng tạo nên cả hành trình lớn.',
  'Từ bảng đen, ta học cách nhìn nhận thế giới.',
  'Áo dài thầy cô – biểu tượng của sự tận tâm.',
  'Sổ điểm không chỉ là số, mà là kỳ vọng.',
  'Nét chữ đỏ là sự bao dung và chỉ dẫn.',
  'Tiếng trống gắn với bao thế hệ.',
  'Bài giảng đầu tiên mở ra cánh cửa mới.',
  'Cặp sách nặng nhưng chứa đầy mơ ước.',
  'Ra chơi – nơi tình bạn bắt đầu.',
  'Chào cờ – khoảnh khắc trang nghiêm.',
  'La mắng nhưng là sự quan tâm thầm lặng.',
  'Bài kiểm tra khiến ta trưởng thành hơn.',
  'Soạn bài khuya – câu chuyện của hy sinh.',
  'Họp phụ huynh – nơi thầy cô lo lắng cho ta.',
  'Giẻ lau bảng cho ta khởi đầu mới.',
  'Tập làm văn nuôi dưỡng tâm hồn.',
  'Lời khen của thầy cô là động lực vô giá.',
  'Phượng đỏ gắn với chia tay.',
  'Bài văn mẫu truyền cảm hứng sống.',
  'Bài toán khó dạy ta suy nghĩ độc lập.',
  'Câu chuyện ngoài sách dạy ta làm người.',
  'Ngày mưa – thầy cô che ô cho ta.',
  'Ngày đến lớp đầu tiên đầy bỡ ngỡ.',
  'Sinh hoạt lớp là lúc sẻ chia.',
  'Tổng kết – thầy cô tự hào nhìn ta.',
  'Thành tích là sự cố gắng của cả lớp.',
  'Nụ cười thầy cô xoa dịu mọi lo âu.',
  'Thiệp 20/11 luôn được thầy cô giữ gìn.',
  'Thầy cô nâng đỡ cả khi ta thất bại.',
  'Giây phút ra trường ai cũng nghẹn ngào.',
]


const animalCopyThree = [
  'Viên phấn mờ dần nhưng kỷ niệm thì không.',
  'Bảng đen cũ mòn nhưng bài học còn mãi.',
  'Áo dài thầy cô là hình ảnh không bao giờ phai.',
  'Sổ điểm lưu giữ cả tuổi trẻ.',
  'Nét chữ đỏ nhắc rằng ta luôn có thể tốt hơn.',
  'Tiếng trống trường còn vang trong ký ức.',
  'Bài giảng đầu tiên khơi dậy tương lai.',
  'Cặp sách nặng nhưng đầy tình yêu của thầy cô.',
  'Giờ ra chơi là tuổi thơ.',
  'Buổi chào cờ là kỷ luật và gắn kết.',
  'La mắng để ta nên người.',
  'Bài kiểm tra khiến ta trưởng thành.',
  'Soạn bài khuya – thầy cô hy sinh âm thầm.',
  'Họp phụ huynh – thầy cô luôn bảo vệ ta.',
  'Giẻ lau bảng – làm mới mỗi ngày.',
  'Văn học dạy ta cảm xúc.',
  'Một lời khen làm sáng tương lai.',
  'Mùa phượng – mùa chia ly.',
  'Bài văn dạy ta yêu cuộc sống.',
  'Bài toán khó tôi luyện ý chí.',
  'Câu chuyện đời thật – bài học thật.',
  'Ngày mưa – ký ức ấm áp.',
  'Ngày đầu đến lớp – khởi đầu không quên.',
  'Sinh hoạt lớp – kết nối mọi người.',
  'Tổng kết – giọt nước mắt tự hào.',
  'Thành tích – món quà cho thầy cô.',
  'Nụ cười thầy cô – ánh sáng niềm tin.',
  'Tấm thiệp – ký ức giữ trọn đời.',
  'Thầy cô nâng ta dậy mỗi lần vấp ngã.',
  'Ra trường – khép lại nhưng không kết thúc.',
]

const animalVideo = [
  '//www.youtube.com/embed/0ah7xB2sblg?showinfo=0&iv_load_policy=3&controls=0&start=142&vq=hd720',
  '//www.youtube.com/embed/kA8X9a9Wq7o?showinfo=0&iv_load_policy=3&controls=0&start=67&vq=hd720',
  '//www.youtube.com/embed/NP8F6p5KyNY?showinfo=0&iv_load_policy=3&controls=0&start=32&vq=hd720',
  '//www.youtube.com/embed/6Yxqz-QP93A?showinfo=0&iv_load_policy=3&controls=0&start=125&vq=hd720',
  '//www.youtube.com/embed/VX5sHcMZNco?showinfo=0&iv_load_policy=3&controls=0&start=5&vq=hd720',
  '//www.youtube.com/embed/afgsYchpD_Q?showinfo=0&iv_load_policy=3&controls=0&start=330',
  '//www.youtube.com/embed/FDzdbJRvWoo?showinfo=0&iv_load_policy=3&controls=0&start=15&vq=hd720',
  '//www.youtube.com/embed/xLvn7UDssco?showinfo=0&iv_load_policy=3&controls=0&start=0&vq=hd720',
  '//www.youtube.com/embed/rhfJILx1eD0?showinfo=0&iv_load_policy=3&controls=0&start=27&vq=hd720',
  '//www.youtube.com/embed/110iUX1Ursk?showinfo=0&iv_load_policy=3&controls=0&start=8&vq=hd720',
  '//www.youtube.com/embed/qfZvHR21krE?showinfo=0&iv_load_policy=3&controls=0&start=77&vq=hd720',
  '//www.youtube.com/embed/bhTU__jVP8E?showinfo=0&iv_load_policy=3&controls=0&start=26&vq=hd720',
  '//www.youtube.com/embed/5oFSLQn9nNE?showinfo=0&iv_load_policy=3&controls=0&start=11&vq=hd720',
  '//www.youtube.com/embed/kqNeUmTry9Q?showinfo=0&iv_load_policy=3&controls=0&start=90&vq=hd720',
  '//www.youtube.com/embed/f4AccPLXeEc?showinfo=0&iv_load_policy=3&controls=0&start=4&vq=hd720',
  '//www.youtube.com/embed/GUfPuZrwR28?showinfo=0&iv_load_policy=3&controls=0&start=890&vq=hd720',
  '//www.youtube.com/embed/dMcEztHmb1U?showinfo=0&iv_load_policy=3&controls=0&start=68&vq=hd720',
  '//www.youtube.com/embed/3aWyJdRPY_k?showinfo=0&iv_load_policy=3&controls=0&start=0&vq=hd720',
  '//www.youtube.com/embed/cpOJPIdYN5I?showinfo=0&iv_load_policy=3&controls=0&start=0&vq=hd720',
  '//www.youtube.com/embed/wvTFbw-Agl0?showinfo=0&iv_load_policy=3&controls=0&start=22&vq=hd720',
  '//www.youtube.com/embed/y6GaPkkGZGw?showinfo=0&iv_load_policy=3&controls=0&start=0&vq=hd720',
  '//www.youtube.com/embed/9DZBdQeZfEk?showinfo=0&iv_load_policy=3&controls=0&start=60&vq=hd720',
  '//www.youtube.com/embed/1tHB8h6Tykg?showinfo=0&iv_load_policy=3&controls=0&start=76&vq=hd720',
  '//www.youtube.com/embed/_2hkNeoRSr0?showinfo=0&iv_load_policy=3&controls=0&start=76&vq=hd720',
  '//www.youtube.com/embed/9EhPdgFccZk?showinfo=0&iv_load_policy=3&controls=0&start=10&vq=hd720',
  '//www.youtube.com/embed/8MJqlM9zSNI?showinfo=0&iv_load_policy=3&controls=0&start=0&vq=hd720',
  '//www.youtube.com/embed/pwazMM15-l0?showinfo=0&iv_load_policy=3&controls=0&start=0&vq=hd720',
  '//www.youtube.com/embed/OmcHTLoC6ls?showinfo=0&iv_load_policy=3&controls=0&start=122&vq=hd720',
  '//www.youtube.com/embed/8itjJDaBCNs?showinfo=0&iv_load_policy=3&controls=0&start=147&vq=hd720',
  '//www.youtube.com/embed/W1_Swdmi4p8?showinfo=0&iv_load_policy=3&controls=0&start=168&vq=hd720',
]

//ALALA CROW
const AnimalOneChartOne = [
  'one-stat', // AMOUNT OF STATS IN THIS CHART
  'W. Kalimantan Killings', // NAME OF THE CHART
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '<em>6,000</em>killed in 2015 in West Kalimantan',
]

const AnimalOneChartTwo = [
  'one-stat', // AMOUNT OF STATS IN THIS CHART
  'Habitat Loss 00-12', // NAME OF THE CHART
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '<em>12<i>%</i></em>loss of forest in range &lsquo;00 to &lsquo;12',
]

// const AnimalOneChartThree = [
// 'one-stat', // AMOUNT OF STATS IN THIS CHART
// 'Captive population', // NAME OF THE CHART
// '',
// '',
// '',
// '',
// '',
// '',
// '',
// '',
// '<em>94</em>captive specimens in 2011'
// ];

//-----

// VAQUITA
const AnimalTwoChartOne = [
  'six-stats', // AMOUNT OF STATS IN THIS CHART
  'Population by Studies', // NAME OF THE CHART
  '<em>1986-88</em><em class="number">503</em>',
  '<em>1988-89</em><em class="number">885</em>',
  '<em>1997</em><em class="number">567</em>',
  '<em>2000s</em><em class="number"><i class="sep-line">around</i>225</em>',
  '<em>2007</em><em class="number">150</em>',
  '<em>2014</em><em class="number"><i class="sep-line">less than</i>100</em>',
  '',
  '',
  '',
]

const AnimalTwoChartTwo = [
  'eight-stats', // AMOUNT OF STATS IN THIS CHART
  'Population Trajectory', // NAME OF THE CHART
  '<em>1994</em><em class="number">630</em>',
  '<em>1997</em><em class="number">570</em>',
  '<em>2000</em><em class="number">465</em>',
  '<em>2003</em><em class="number">370</em>',
  '<em>2006</em><em class="number">245</em>',
  '<em>2009</em><em class="number">210</em>',
  '<em>2012</em><em class="number">160</em>',
  '<em>2015</em><em class="number">90</em>',
  '',
]

const AnimalTwoChartThree = [
  'one-stat', // AMOUNT OF STATS IN THIS CHART
  'Yearly Decline', // NAME OF THE CHART
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '<em>18.5<i>%</i></em>estimated yearly decline',
]

// ------------

// GOLDEN LION TAMARIN
const AnimalThreeChartOne = [
  'eight-stats', // AMOUNT OF STATS IN THIS CHART
  'Population', // NAME OF THE CHART
  '<em>1977</em><em class="number">1-200</em>',
  '<em>1980</em><em class="number"><i class="sep-line">less than</i>100</em>',
  '<em>1984</em><em class="number">200</em>',
  '<em>1987</em><em class="number"><i class="sep-line">around</i>400</em>',
  '<em>1994</em><em class="number"><i class="sep-line">over</i>500</em>',
  '<em>1998</em><em class="number"><i class="sep-line">over</i>800</em>',
  '<em>2002</em><em class="number"><i class="sep-line">around</i>1000</em>',
  '<em>2004</em><em class="number"><i class="sep-line">more than</i>1000</em>',
  '',
]

const AnimalThreeChartTwo = [
  'six-stats', // AMOUNT OF STATS IN THIS CHART
  'Re-introduced to wild', // NAME OF THE CHART
  '<em>1970</em><em class="number">10</em>',
  '<em>1990</em><em class="number">80</em>',
  '<em>1995</em><em class="number">145</em>',
  '<em>2000</em><em class="number">225</em>',
  '<em>2005</em><em class="number">525</em>',
  '<em>2007</em><em class="number">625</em>',
  '',
  '',
  '',
]

const AnimalThreeChartThree = [
  'one-stat', // AMOUNT OF STATS IN THIS CHART
  'Current population', // NAME OF THE CHART
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '<em>3,200</em>estimated Tamarin population',
]

// ------------

// FROG
const AnimalFourChartOne = [
  'four-stats', // AMOUNT OF STATS IN THIS CHART
  '(all) frogs status intensity', // NAME OF THE CHART
  '<em>EX</em><em class="number">1%</em>',
  '<em>TH</em><em class="number">29%</em>',
  '<em>Near-TH</em><em class="number">6%</em>',
  '<em>other</em><em class="number">65%</em>',
  '',
  '',
  '',
  '',
  '',
]

const AnimalFourChartTwo = [
  'one-stat', // AMOUNT OF STATS IN THIS CHART
  'Size', // NAME OF THE CHART
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '<em>1"</em>length of frog (inches)',
]

// FOREST OWLET
const AnimalFiveChartOne = [
  'one-stat', // AMOUNT OF STATS IN THIS CHART
  'World Population', // NAME OF THE CHART
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '<em><i><</i>250</em>total current population',
]

// ------------

// TURTLE
const AnimalSixChartOne = [
  'eight-stats', // AMOUNT OF STATS IN THIS CHART
  'Estimated nests found on Texas Coast', // NAME OF THE CHART
  '<em>1992</em><em class="number">0</em>',
  '<em>1995</em><em class="number">4</em>',
  '<em>1998</em><em class="number">15</em>',
  '<em>2001</em><em class="number">7</em>',
  '<em>2004</em><em class="number">40</em>',
  '<em>2007</em><em class="number">128</em>',
  '<em>2010</em><em class="number">141</em>',
  '<em>2013</em><em class="number">152</em>',
  '',
]

const AnimalSixChartTwo = [
  'one-stat', // AMOUNT OF STATS IN THIS CHART
  'Females 1947', // NAME OF THE CHART
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '<em>40,000</em>min. number females in 1947',
]

const AnimalSixChartThree = [
  'one-stat', // AMOUNT OF STATS IN THIS CHART
  'Current Females', // NAME OF THE CHART
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '<em>1,000</em>Breeding females existing',
]

// ------------

// TURTLE
const AnimalSevenChartOne = [
  'six-stats', // AMOUNT OF STATS IN THIS CHART
  'Population in the Wild', // NAME OF THE CHART
  '<em>1958</em><em class="number">10,000</em>',
  '<em>1970</em><em class="number"><i class="sep-line">around</i>3-7,000</em>',
  '<em>1980</em><em class="number"><i class="sep-line">no more than</i>2,000</em>',
  '<em>1982</em><em class="number">2-500</em>',
  '<em>1994</em><em class="number">1-200</em>',
  '<em>2000</em><em class="number">0</em>',
  '',
  '',
  '',
]

const AnimalSevenChartTwo = [
  'four-stats', // AMOUNT OF STATS IN THIS CHART
  'Conservation Status Intensity Trend', // NAME OF THE CHART
  '<em>1986</em><em class="number">En</em>',
  '<em>1994</em><em class="number">En</em>',
  '<em>1996</em><em class="number">Cr En</em>',
  '<em>2000</em><em class="number">EIW</em>',
  '',
  '',
  '',
  '',
  '',
]

const AnimalSevenChartThree = [
  'six-stats', // AMOUNT OF STATS IN THIS CHART
  'Captive Populations by location 2004-6', // NAME OF THE CHART
  '<em>Bou Hedma</em><em class="number">130</em>',
  '<em>Sidi-Toui</em><em class="number">25</em>',
  '<em>O. Dekouk</em><em class="number">12</em>',
  '<em>S. Massa</em><em class="number">240</em>',
  '<em>Guembeul</em><em class="number">18</em>',
  '<em>Ferlo</em><em class="number">12</em>',
  '',
  '',
  '',
]

// ------------

// IGUANA

const AnimalEightChartOne = [
  'one-stat', // AMOUNT OF STATS IN THIS CHART
  'First discovered', // NAME OF THE CHART
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '<em>1979</em>Date first discovered',
]

const AnimalEightChartTwo = [
  'one-stat', // AMOUNT OF STATS IN THIS CHART
  'Population in Yadua Taba', // NAME OF THE CHART
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '<em>6,000</em> Highest Area Population (Yadua Taba)',
]

// ------------

// ------------

// SEAHORSE

const AnimalNineChartOne = [
  'one-stat', // AMOUNT OF STATS IN THIS CHART
  'Decline in Swartvlei', // NAME OF THE CHART
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '<em>80<i>%</i></em>Decline in Swartvlei estuary 2002-3',
]

const AnimalNineChartTwo = [
  'one-stat', // AMOUNT OF STATS IN THIS CHART
  'Decline in Knysna', // NAME OF THE CHART
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '<em>30<i>%</i></em>Decline in Knysna estuary 2000-1',
]

// ------------

// ARAMDILLO
const AnimalTenChartOne = [
  'one-stat', // AMOUNT OF STATS IN THIS CHART
  'Population Decline', // NAME OF THE CHART
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '<em>30<i>%</i></em>Decline in last 10 years',
]

// ------------

// SLOTH
const AnimalElevenChartOne = [
  'six-stats', // AMOUNT OF STATS IN THIS CHART
  'Population & Projection Estimates', // NAME OF THE CHART
  '<em>2007</em><em class="number">500</em>',
  '<em>2010</em><em class="number">350</em>',
  '<em>2012</em><em class="number">300</em>',
  '<em>2015</em><em class="number">175</em>',
  '<em>2017</em><em class="number">100</em>',
  '<em>2022</em><em class="number">0</em>',
  '',
  '',
  '',
]

const AnimalElevenChartTwo = [
  'six-stats', // AMOUNT OF STATS IN THIS CHART
  'Habitat Size (hectares)', // NAME OF THE CHART
  '<em>2007</em><em class="number">1,500</em>',
  '<em>2010</em><em class="number">1,200</em>',
  '<em>2012</em><em class="number">1,100</em>',
  '<em>2015</em><em class="number">800</em>',
  '<em>2017</em><em class="number">675</em>',
  '<em>2022</em><em class="number">300</em>',
  '',
  '',
  '',
]

const AnimalElevenChartThree = [
  'one-stat', // AMOUNT OF STATS IN THIS CHART
  'Population Decline', // NAME OF THE CHART
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '<em>80<i>%</i></em>Decline in last 10 years',
]

// ------------

//KAKAPO

const AnimalTwelveChartOne = [
  'eight-stats', // AMOUNT OF STATS IN THIS CHART
  'Population of Kakapo', // NAME OF THE CHART
  '<em>1993</em><em class="number">53</em>',
  '<em>1996</em><em class="number">51</em>',
  '<em>1999</em><em class="number">63</em>',
  '<em>2002</em><em class="number">87</em>',
  '<em>2005</em><em class="number">87</em>',
  '<em>2008</em><em class="number">90</em>',
  '<em>2011</em><em class="number">120</em>',
  '<em>2014</em><em class="number">126</em>',
  '',
]

// --------------

// ECHIDNA
const AnimalThirteenChartOne = [
  'one-stat', // AMOUNT OF STATS IN THIS CHART
  'Population Decline', // NAME OF THE CHART
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '<em>80<i>%</i></em>Decline in last 35-40 years',
]

const AnimalThirteenChartTwo = [
  'one-stat', // AMOUNT OF STATS IN THIS CHART
  'Specimens Recorded', // NAME OF THE CHART
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '<em>3</em>Long-beakeds - all critically endangered',
]

// --------------

// --------------

// PENGUIN
const AnimalFourteenChartOne = [
  'six-stats', // AMOUNT OF STATS IN THIS CHART
  'Estimated Breeding Pairs', // NAME OF THE CHART
  '<em>1910</em><em class="number">620,000</em>',
  '<em>1955</em><em class="number">120,000</em>',
  '<em>1979</em><em class="number">70,000</em>',
  '<em>1995</em><em class="number">60,000</em>',
  '<em>2007</em><em class="number">30,000</em>',
  '<em>2009</em><em class="number">10,000</em>',
  '',
  '',
  '',
]

const AnimalFourteenChartTwo = [
  'five-stats', // AMOUNT OF STATS IN THIS CHART
  'Estimated Breeding Pairs in South Africa', // NAME OF THE CHART
  '<em>1979</em><em class="number">57,000</em>',
  '<em>1987</em><em class="number">47,000</em>',
  '<em>1993</em><em class="number">36,000</em>',
  '<em>1998</em><em class="number">25,000</em>',
  '<em>2001</em><em class="number">56,000</em>',
  '',
  '',
  '',
  '',
]

const AnimalFourteenChartThree = [
  'one-stat', // AMOUNT OF STATS IN THIS CHART
  'Population Decline', // NAME OF THE CHART
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '<em>99<i>%</i></em>Decline since turn of century',
]

// --------------

// DAMSEL
const AnimalFifteenChartOne = [
  'one-stat', // AMOUNT OF STATS IN THIS CHART
  'Projected Decline', // NAME OF THE CHART
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '<em>30-50<i>%</i></em>Projected decline in next decade',
]

const AnimalFifteenChartTwo = [
  'one-stat', // AMOUNT OF STATS IN THIS CHART
  'Length', // NAME OF THE CHART
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '<em>36-38<i>mm</i></em>Average length of body',
]

// --------------

const AnimalSixteenChartOne = [
  'one-stat', // AMOUNT OF STATS IN THIS CHART
  'Population Decline', // NAME OF THE CHART
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '<em>30<i>%</i></em>decline over last 3 decades',
]

const AnimalSixteenChartTwo = [
  'one-stat', // AMOUNT OF STATS IN THIS CHART
  'Length of Tongue', // NAME OF THE CHART
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '<em>20-25<i>cm</i></em>Average length of tongue',
]

// --------------
// PARROTFISH

const AnimalSeventeenChartOne = [
  'one-stat', // AMOUNT OF STATS IN THIS CHART
  'Habitat Decline', // NAME OF THE CHART
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '<em>37<i>%</i></em>Recent habitat loss',
]

const AnimalSeventeenChartTwo = [
  'one-stat', // AMOUNT OF STATS IN THIS CHART
  'Catching Trend', // NAME OF THE CHART
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '<em>27<i>%</i></em>Decline in catches since 2003',
]

// --------------

// CAMEL
const AnimalEighteenChartOne = [
  'five-stats', // AMOUNT OF STATS IN THIS CHART
  'Conservation Status Intensity Trend', // NAME OF THE CHART
  '<em>1986</em><em class="number">VU</em>',
  '<em>1994</em><em class="number">VU</em>',
  '<em>1996</em><em class="number">EN</em>',
  '<em>2002</em><em class="number">CR EN</em>',
  '<em>2007</em><em class="number">CR EN</em>',
  '',
  '',
  '',
  '',
]

const AnimalEighteenChartTwo = [
  'six-stats', // AMOUNT OF STATS IN THIS CHART
  'World Population', // NAME OF THE CHART
  '<em>1983</em><em class="number">3-500</em>',
  '<em>1987</em><em class="number">3-500</em>',
  '<em>1996</em><em class="number">1.3-2,000</em>',
  '<em>1997</em><em class="number"><i class="sep-line">more than</i>1,500</em>',
  '<em>1998</em><em class="number"><i class="sep-line">less than</i>900</em>',
  '<em>2003</em><em class="number"><i class="sep-line">around</i>950</em>',
  '',
  '',
  '',
]

const AnimalEighteenChartThree = [
  'one-stat', // AMOUNT OF STATS IN THIS CHART
  'Projected Decline', // NAME OF THE CHART
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '<em>80<i>%</i></em>Decline in next 45-50 years',
]

// -------

const AnimalNineteenChartOne = [
  'one-stat', // AMOUNT OF STATS IN THIS CHART
  'Wingspan', // NAME OF THE CHART
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '<em>17-20<i>cm</i></em>Average wingspan',
]

// -------

// OSTRICH
const AnimalTwentyChartOne = [
  'one-stat', // AMOUNT OF STATS IN THIS CHART
  'Species Distinction', // NAME OF THE CHART
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '<em>2014</em>Year declared distinct species',
]

// -------

// RED PANDA
const AnimalTwentyOneChartOne = [
  'six-stats', // AMOUNT OF STATS IN THIS CHART
  'Estimated Population', // NAME OF THE CHART
  '<em>1980</em><em class="number">75,000</em>',
  '<em>1985</em><em class="number">60,000</em>',
  '<em>1990</em><em class="number">50,000</em>',
  '<em>1995</em><em class="number">35,000</em>',
  '<em>2000</em><em class="number">35,000</em>',
  '<em>2005</em><em class="number">15,000</em>',
  '',
  '',
  '',
]

const AnimalTwentyOneChartTwo = [
  'one-stat', // AMOUNT OF STATS IN THIS CHART
  'Current population', // NAME OF THE CHART
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '<em>10,000</em>Total current population',
]

const AnimalTwentyOneChartThree = [
  'one-stat', // AMOUNT OF STATS IN THIS CHART
  'Decline in last 50 years', // NAME OF THE CHART
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '<em>40<i>%</i></em>Population decline in last 50 years',
]

// -------

// TAPIR
const AnimalTwentyTwoChartOne = [
  'one-stat', // AMOUNT OF STATS IN THIS CHART
  'Population in Malaysia', // NAME OF THE CHART
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '<em>1.5-2,000</em>Estimated population in Malaysia',
]

const AnimalTwentyTwoChartTwo = [
  'one-stat', // AMOUNT OF STATS IN THIS CHART
  'Decline in Sumatra', // NAME OF THE CHART
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '<em>50<i>%</i></em>Population decline in Sumatra',
]

// -------
// SIFAKA

const AnimalTwentyThreeChartOne = [
  'four-stats', // AMOUNT OF STATS IN THIS CHART
  'Estimated Population', // NAME OF THE CHART
  '<em>1972</em><em class="number">500</em>',
  '<em>1989</em><em class="number">2,000</em>',
  '<em>1994</em><em class="number">1-10,000</em>',
  '<em>1998</em><em class="number"><i class="sep-line">around</i>2,000</em>',
  '',
  '',
  '',
  '',
  '',
]

const AnimalTwentyThreeChartTwo = [
  'one-stat', // AMOUNT OF STATS IN THIS CHART
  'Future Decline', // NAME OF THE CHART
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '<em>>80<i>%</i></em>Population decline in next 45 years',
]

// -------

// -------
// LYNX

const AnimalTwentyFourChartOne = [
  'eight-stats', // AMOUNT OF STATS IN THIS CHART
  'Estimated Population', // NAME OF THE CHART
  '<em>1991</em><em class="number"><i class="sep-line">around</i>1,000</em>',
  '<em>1995</em><em class="number">1,300</em>',
  '<em>1998</em><em class="number"><i class="sep-line">around</i>800</em>',
  '<em>2000</em><em class="number"><i class="sep-line">around</i>600</em>',
  '<em>2002</em><em class="number"><i class="sep-line">less than</i>300</em>',
  '<em>2003</em><em class="number">150-300</em>',
  '<em>2004</em><em class="number">135</em>',
  '<em>2006</em><em class="number">120</em>',
  '',
]

// -------

//RHINO

const AnimalTwentyFiveChartOne = [
  'eight-stats', // AMOUNT OF STATS IN THIS CHART
  'World Population', // NAME OF THE CHART
  '<em>1967</em><em class="number">100</em>',
  '<em>1976</em><em class="number">89-158</em>',
  '<em>1982</em><em class="number"><i class="sep-line">less than</i>300</em>',
  '<em>1990</em><em class="number">5-900</em>',
  '<em>1996</em><em class="number">400</em>',
  '<em>2001</em><em class="number"><i class="sep-line">around</i>300</em>',
  '<em>2008</em><em class="number">250</em>',
  '<em>2013</em><em class="number"><i class="sep-line">less than</i>100</em>',
  '',
]

const AnimalTwentyFiveChartTwo = [
  'six-stats', // AMOUNT OF STATS IN THIS CHART
  'Population in Malaya', // NAME OF THE CHART
  '<em>1963</em><em class="number">47</em>',
  '<em>1969</em><em class="number">20</em>',
  '<em>1976</em><em class="number">20</em>',
  '<em>1983</em><em class="number">11-23</em>',
  '<em>1999</em><em class="number">85</em>',
  '<em>2004</em><em class="number">59-78</em>',
  '',
  '',
  '',
]

const AnimalTwentyFiveChartThree = [
  'one-stat', // AMOUNT OF STATS IN THIS CHART
  'Population Decline', // NAME OF THE CHART
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '<em>80<i>%</i></em>Decline in last 20 years',
]

// -------
// CHOCOAN PECCARY

const AnimalTwentySixChartOne = [
  'four-stats', // AMOUNT OF STATS IN THIS CHART
  'Population Ages', // NAME OF THE CHART
  '<em>< 2</em><em class="number">20%</em>',
  '<em>2-3</em><em class="number">47%</em>',
  '<em>3-5</em><em class="number">20%</em>',
  '<em>> 5</em><em class="number">13%</em>',
  '',
  '',
  '',
  '',
  '',
]

const AnimalTwentySixChartTwo = [
  'four-stats', // AMOUNT OF STATS IN THIS CHART
  'Sighting Reports (Trans-Chaco Highway)', // NAME OF THE CHART
  '<em>1976</em><em class="number">72</em>',
  '<em>1977/79</em><em class="number">Fewer</em>',
  '<em>1981</em><em class="number">6</em>',
  '<em>13%</em><em class="number">0</em>',
  '',
  '',
  '',
  '',
  '',
]

const AnimalTwentySixChartThree = [
  'one-stat', // AMOUNT OF STATS IN THIS CHART
  'Paraguay Population ', // NAME OF THE CHART
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '<em>5,000</em>Estimated population in Paraguay',
]

// -------

// OKAPI

const AnimalTwentySevenChartOne = [
  'one-stat', // AMOUNT OF STATS IN THIS CHART
  'Current Population', // NAME OF THE CHART
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '<em>10,000</em>Estimated current population',
]

const AnimalTwentySevenChartTwo = [
  'one-stat', // AMOUNT OF STATS IN THIS CHART
  'Decline 1995-2007', // NAME OF THE CHART
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '<em>43<i>%</i></em>Decline 1995-2007',
]

const AnimalTwentySevenChartThree = [
  'one-stat', // AMOUNT OF STATS IN THIS CHART
  'Decline 1998-2012', // NAME OF THE CHART
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '<em>47<i>%</i></em>Decline 1998-2012',
]

// -------

// JAVAN SLOW LORIS

const AnimalTwentyEightChartOne = [
  'one-stat', // AMOUNT OF STATS IN THIS CHART
  'Population decline', // NAME OF THE CHART
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '<em>80<i>%</i></em>Decline in last 24 years',
]

const AnimalTwentyEightChartTwo = [
  'one-stat', // AMOUNT OF STATS IN THIS CHART
  'Habitat loss', // NAME OF THE CHART
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '<em>20<i>%</i></em>of suitable habitat remaining',
]

// -------

// HIROLA

const AnimalTwentyNineChartOne = [
  'six-stats', // AMOUNT OF STATS IN THIS CHART
  'World Population', // NAME OF THE CHART
  '<em>1973</em><em class="number">14,000</em>',
  '<em>1976</em><em class="number">13-14,500</em>',
  '<em>1983</em><em class="number">7,000</em>',
  '<em>1985</em><em class="number"><i class="sep-line">less than</i>1,000</em>',
  '<em>1995</em><em class="number">300</em>',
  '<em>2010</em><em class="number">402-466</em>',
  '',
  '',
  '',
]

const AnimalTwentyNineChartTwo = [
  'four-stats', // AMOUNT OF STATS IN THIS CHART
  'Kenya Population', // NAME OF THE CHART
  '<em>1973</em><em class="number">10,000</em>',
  '<em>1976</em><em class="number">12,500</em>',
  '<em>1978</em><em class="number">2,385</em>',
  '<em>1995</em><em class="number">300</em>',
  '',
  '',
  '',
  '',
  '',
]

// -------

const AnimalTwentyNineChartThree = [
  'one-stat', // AMOUNT OF STATS IN THIS CHART
  '1983-85 Decline', // NAME OF THE CHART
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '<em>85-90<i>%</i></em>Decline between &rsquo;83-85',
]

// -------

// DRILL

const AnimalThirtyChartOne = [
  'one-stat', // AMOUNT OF STATS IN THIS CHART
  'Population', // NAME OF THE CHART
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '<em>3,000</em>Current estimated population',
]

// INDIVIDUAL ANIMAL DATA SET
const AnimalOneCharts = [
  'two', //AMOUNT OF CHARTS FOR ANIMAL
  AnimalOneChartOne,
  AnimalOneChartTwo,
  '',
]

// VAQUITA ANIMAL DATA SET
const AnimalTwoCharts = [
  'three', //AMOUNT OF CHARTS FOR ANIMAL
  AnimalTwoChartOne,
  AnimalTwoChartTwo,
  AnimalTwoChartThree,
]

// TAMARIN DATA SET
const AnimalThreeCharts = [
  'three', //AMOUNT OF CHARTS FOR ANIMAL
  AnimalThreeChartOne,
  AnimalThreeChartTwo,
  AnimalThreeChartThree,
]

// FROG DATA SET
const AnimalFourCharts = [
  'two', //AMOUNT OF CHARTS FOR ANIMAL
  AnimalFourChartOne,
  AnimalFourChartTwo,
  '',
]

// OWL DATA SET
const AnimalFiveCharts = [
  'one', //AMOUNT OF CHARTS FOR ANIMAL
  AnimalFiveChartOne,
  '',
  '',
]

// TURTLE
const AnimalSixCharts = [
  'three', //AMOUNT OF CHARTS FOR ANIMAL
  AnimalSixChartOne,
  AnimalSixChartTwo,
  AnimalSixChartThree,
]

// ORYX
const AnimalSevenCharts = [
  'three', //AMOUNT OF CHARTS FOR ANIMAL
  AnimalSevenChartOne,
  AnimalSevenChartTwo,
  AnimalSevenChartThree,
]

// IGUANA
const AnimalEightCharts = [
  'two', //AMOUNT OF CHARTS FOR ANIMAL
  AnimalEightChartOne,
  AnimalEightChartTwo,
  '',
]

// SEAHORSE
const AnimalNineCharts = [
  'two', //AMOUNT OF CHARTS FOR ANIMAL
  AnimalNineChartOne,
  AnimalNineChartTwo,
  '',
]

// ARMADILLO
const AnimalTenCharts = [
  'one', //AMOUNT OF CHARTS FOR ANIMAL
  AnimalTenChartOne,
  '',
  '',
]

// SLOTH
const AnimalElevenCharts = [
  'three', //AMOUNT OF CHARTS FOR ANIMAL
  AnimalElevenChartOne,
  AnimalElevenChartTwo,
  AnimalElevenChartThree,
]

// KAKAPO
const AnimalTwelveCharts = [
  'one', //AMOUNT OF CHARTS FOR ANIMAL
  AnimalTwelveChartOne,
  '',
  '',
]

// Echidna
const AnimalThirteenCharts = [
  'two', //AMOUNT OF CHARTS FOR ANIMAL
  AnimalThirteenChartOne,
  AnimalThirteenChartTwo,
  '',
]

// PENGUIN
const AnimalFourteenCharts = [
  'three', //AMOUNT OF CHARTS FOR ANIMAL
  AnimalFourteenChartOne,
  AnimalFourteenChartTwo,
  AnimalFourteenChartThree,
]

// DAMSEL
const AnimalFifteenCharts = [
  'two', //AMOUNT OF CHARTS FOR ANIMAL
  AnimalFifteenChartOne,
  AnimalFifteenChartTwo,
  '',
]

// SUNBEAR
const AnimalSixteenCharts = [
  'two', //AMOUNT OF CHARTS FOR ANIMAL
  AnimalSixteenChartOne,
  AnimalSixteenChartTwo,
  '',
]

// PARROTFISH
const AnimalSeventeenCharts = [
  'two', //AMOUNT OF CHARTS FOR ANIMAL
  AnimalSeventeenChartOne,
  AnimalSeventeenChartTwo,
  '',
]

// CAMEL
const AnimalEighteenCharts = [
  'three', //AMOUNT OF CHARTS FOR ANIMAL
  AnimalEighteenChartOne,
  AnimalEighteenChartTwo,
  AnimalEighteenChartThree,
]

// BUTTERFLY
const AnimalNineteenCharts = [
  'one', //AMOUNT OF CHARTS FOR ANIMAL
  AnimalNineteenChartOne,
  '',
  '',
]

// OSTRICH
const AnimalTwentyCharts = [
  'one', //AMOUNT OF CHARTS FOR ANIMAL
  AnimalTwentyChartOne,
  '',
  '',
]

// RED PANDA
const AnimalTwentyOneCharts = [
  'three', //AMOUNT OF CHARTS FOR ANIMAL
  AnimalTwentyOneChartOne,
  AnimalTwentyOneChartTwo,
  AnimalTwentyOneChartThree,
]

// TAPIR
const AnimalTwentyTwoCharts = [
  'two', //AMOUNT OF CHARTS FOR ANIMAL
  AnimalTwentyTwoChartOne,
  AnimalTwentyTwoChartTwo,
  '',
]

// SIFAKA
const AnimalTwentyThreeCharts = [
  'two', //AMOUNT OF CHARTS FOR ANIMAL
  AnimalTwentyThreeChartOne,
  AnimalTwentyThreeChartTwo,
  '',
]

// LYNX
const AnimalTwentyFourCharts = [
  'one', //AMOUNT OF CHARTS FOR ANIMAL
  AnimalTwentyFourChartOne,
  '',
  '',
]

// RHINO
const AnimalTwentyFiveCharts = [
  'three', //AMOUNT OF CHARTS FOR ANIMAL
  AnimalTwentyFiveChartOne,
  AnimalTwentyFiveChartTwo,
  AnimalTwentyFiveChartThree,
]

// PECCARY
const AnimalTwentySixCharts = [
  'three', //AMOUNT OF CHARTS FOR ANIMAL
  AnimalTwentySixChartOne,
  AnimalTwentySixChartTwo,
  AnimalTwentySixChartThree,
]

//
const AnimalTwentySevenCharts = [
  'three', //AMOUNT OF CHARTS FOR ANIMAL
  AnimalTwentySevenChartOne,
  AnimalTwentySevenChartTwo,
  AnimalTwentySevenChartThree,
]

// RHINO
const AnimalTwentyEightCharts = [
  'two', //AMOUNT OF CHARTS FOR ANIMAL
  AnimalTwentyEightChartOne,
  AnimalTwentyEightChartTwo,
  '',
]

// HIROLA
const AnimalTwentyNineCharts = [
  'three', //AMOUNT OF CHARTS FOR ANIMAL
  AnimalTwentyNineChartOne,
  AnimalTwentyNineChartTwo,
  AnimalTwentyNineChartThree,
]

// DRILL
const AnimalThirtyCharts = [
  'one', //AMOUNT OF CHARTS FOR ANIMAL
  AnimalThirtyChartOne,
  '',
  '',
]

//OVERALL PULLING OF ANIMAL DATA ARRAYS
const animalChart = [
  AnimalOneCharts,
  AnimalTwoCharts,
  AnimalThreeCharts,
  AnimalFourCharts,
  AnimalFiveCharts,
  AnimalSixCharts,
  AnimalSevenCharts,
  AnimalEightCharts,
  AnimalNineCharts,
  AnimalTenCharts,
  AnimalElevenCharts,
  AnimalTwelveCharts,
  AnimalThirteenCharts,
  AnimalFourteenCharts,
  AnimalFifteenCharts,
  AnimalSixteenCharts,
  AnimalSeventeenCharts,
  AnimalEighteenCharts,
  AnimalNineteenCharts,
  AnimalTwentyCharts,
  AnimalTwentyOneCharts,
  AnimalTwentyTwoCharts,
  AnimalTwentyThreeCharts,
  AnimalTwentyFourCharts,
  AnimalTwentyFiveCharts,
  AnimalTwentySixCharts,
  AnimalTwentySevenCharts,
  AnimalTwentyEightCharts,
  AnimalTwentyNineCharts,
  AnimalThirtyCharts,
]
