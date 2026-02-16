export default {
  transform: {
    "^.+\\.jsx?$": "babel-jest"
  },
  // เพิ่มส่วนนี้เพื่อเปิดใช้งาน Coverage Report
  collectCoverage: true,
  coverageReporters: ["html", "text", "lcov"],
  coverageDirectory: "coverage"
};