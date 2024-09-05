namespace InkMasterAPI.Models
{
    public class Rating
    {
        public int RatingId { get; set; }
        public int? AppointmentId { get; set; }
        public int? CustomerId { get; set; }
        public int? RatingScore { get; set; }
        public string? Comment { get; set; }
        public DateTime? CreatedAt { get; set; }
    }
}
