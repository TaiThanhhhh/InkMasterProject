namespace InkMasterAPI.Models
{
    public class AftercareAppointment
    {
        public int AftercareId { get; set; }
        public int? CustomerId { get; set; }
        public int? TattooArtistId { get; set; }
        public DateTime AftercareDate { get; set; }
        public string? Notes { get; set; }
        public DateTime? CreatedAt { get; set; }
    }
}
