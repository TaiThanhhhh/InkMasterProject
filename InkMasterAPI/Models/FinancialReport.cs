namespace InkMasterAPI.Models
{
    public class FinancialReport
    {
        public int ReportId { get; set; }
        public int? TattooArtistId { get; set; }
        public decimal? TotalIncome { get; set; }
        public decimal? TotalExpenses { get; set; }
        public decimal? NetProfit { get; set; }
        public DateTime? ReportDate { get; set; }
    }
}
