namespace InkMasterAPI.Models
{
    public class Appointment
    {
        public int AppointmentId { get; set; }
        public int? CustomerId { get; set; }
        public int? TattooArtistId { get; set; }
        public DateTime AppointmentDate { get; set; }
        public string? Status { get; set; }
        public decimal? TotalPrice { get; set; }
        public decimal? DepositAmount { get; set; }
        public DateTime? CreatedAt { get; set; }
        public DateTime? UpdatedAt { get; set; }
    }
}
