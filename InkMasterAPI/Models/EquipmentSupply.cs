namespace InkMasterAPI.Models
{
    public class EquipmentSupply
    {
        public int EquipmentId { get; set; }
        public int? TattooArtistId { get; set; }
        public string? EquipmentName { get; set; }
        public int? Quantity { get; set; }
        public DateTime? LastRestocked { get; set; }
        public DateTime? CreatedAt { get; set; }
        public DateTime? MaintenanceDate { get; set; }
        public int? WarningLevel { get; set; }
    }
}
