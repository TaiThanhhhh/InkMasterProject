namespace InkMasterAPI.Models
{
    public class Consultation
    {
        public int ConsultationId { get; set; }
        public int? CustomerId { get; set; }
        public int? TattooArtistId { get; set; }
        public DateTime ConsultationDate { get; set; }
        public string? Status { get; set; }
        public string? Notes { get; set; }
        public DateTime? CreatedAt { get; set; }
    }
}
