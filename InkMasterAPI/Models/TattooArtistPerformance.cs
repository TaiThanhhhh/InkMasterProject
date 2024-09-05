namespace InkMasterAPI.Models
{
    public class TattooArtistPerformance
    {
        public int PerformanceId { get; set; }
        public int? TattooArtistId { get; set; }
        public int? RatingScore { get; set; }
        public string? Comments { get; set; }
        public DateTime? EvaluationDate { get; set; }
    }
}
