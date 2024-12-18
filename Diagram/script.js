// Ambil elemen canvas
const ctx = document.getElementById('salesBarChart').getContext('2d');

// Data laporan penjualan
const data2023 = [120, 150, 180, 200, 170, 250, 300, 320, 290, 310, 330, 400];
const data2024 = [130, 160, 190, 210, 180, 260, 310, 330, 300, 320, 340, 420];
const months = [
  'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
  'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
];

// Buat diagram batang menggunakan Chart.js
const salesBarChart = new Chart(ctx, {
  type: 'bar', // Jenis diagram: batang (bar)
  data: {
    labels: months, // Label sumbu X: Nama bulan
    datasets: [
      {
        label: 'Penjualan Tahun 2023',
        data: data2023,
        backgroundColor: 'rgba(54, 162, 235, 0.8)', // Warna batang 2023
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1
      },
      {
        label: 'Penjualan Tahun 2024',
        data: data2024,
        backgroundColor: 'rgba(255, 99, 132, 0.8)', // Warna batang 2024
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1
      }
    ]
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Jumlah Penjualan (dalam unit)'
        }
      },
      x: {
        title: {
          display: true,
          text: 'Bulan'
        }
      }
    }
  }
});
