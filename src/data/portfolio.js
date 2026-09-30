

export const owner = {
  name: 'Nguyễn Văn Tài',
  nameEn: 'Nguyen Tai',
  role: 'Full-stack Developer',
  tagline: 'Full-stack Web Developer',
  bio: 'Tôi là sinh viên ngành Công nghệ phần mềm với định hướng trở thành Full-stack Developer. Tôi tập trung phát triển các ứng dụng web, đặc biệt với Backend PHP/Laravel và Frontend Vue.js.',
  avatar: null, // Để null nếu dùng initials, hoặc đặt đường dẫn ảnh
  socials: {
    github: 'https://github.com/tainguyenwork9',
    linkedin: 'https://linkedin.com/',
    facebook: 'https://www.facebook.com/ntwzaii05',
  },
}

export const about = {
  education: {
    school: 'Đại học Duy Tân',
    major: 'Công Nghệ Phần Mềm - GPA: 3.69',
    year: 'Sinh viên năm 4',
  },
  interests: [
    'Web Development',
    'Backend Development',
    'Full-stack Development',
    'Database & System Design',
  ],
  focus: {
    direction: 'Full-stack Web Developer',
    backend: 'PHP / Laravel',
    frontend: 'Vue.js',
  },
}

export const skills = [
  {
    id: 'languages',
    group: 'Ngôn ngữ lập trình',
    icon: '{ }',
    items: ['Java', 'C#', 'PHP', 'JavaScript'],
  },
  {
    id: 'frontend',
    group: 'Frontend',
    icon: '⬡',
    items: ['HTML', 'CSS', 'Bootstrap', 'Vue.js'],
  },
  {
    id: 'backend',
    group: 'Backend',
    icon: '⚙',
    items: ['PHP', 'Laravel', 'ASP.NET'],
  },
  {
    id: 'database',
    group: 'Database',
    icon: '▦',
    items: ['MySQL', 'SQL Server'],
  },
  {
    id: 'tools',
    group: 'Tools',
    icon: '⚒',
    items: ['Git', 'GitHub', 'Postman', 'Visual Studio', 'VS Code', 'XAMPP', 'Android Studio'],
  },
]

export const projects = [
  {
    id: 1,
    title: 'Hệ Thống Đặt Thuê Xe Máy Trực Tuyến',
    description:
      'Hệ thống hỗ trợ người dùng tìm kiếm, xem thông tin và đặt thuê xe máy trực tuyến. Tích hợp thanh toán online, quản lý đơn thuê và dashboard thống kê.',
    role: 'Thành viên nhóm phát triển',
    techStack: ['Laravel', 'Vue.js', 'MySQL', 'Git'],
    features: [
      'Đặt xe trực tuyến',
      'Thanh toán online',
      'Quản lý đơn thuê',
      'Quản lý người dùng',
      'Dashboard & thống kê',
    ],
    links: {
      demo: null,
      github: 'https://github.com/',
    },
  },
]

export const philosophy = {
  quote:
    'Không ngừng học hỏi, chủ động giải quyết vấn đề và phát triển thông qua những sản phẩm thực tế.',
  values: [
    {
      id: 'learning',
      title: 'Continuous Learning',
      desc: 'Luôn cập nhật kiến thức và công nghệ mới.',
    },
    {
      id: 'problem',
      title: 'Problem Solving',
      desc: 'Tiếp cận vấn đề với tư duy phân tích và logic.',
    },
    {
      id: 'collab',
      title: 'Collaboration',
      desc: 'Làm việc nhóm hiệu quả để tạo ra sản phẩm tốt hơn.',
    },
  ],
}
