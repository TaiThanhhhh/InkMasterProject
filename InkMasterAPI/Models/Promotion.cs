namespace InkMasterAPI.Models
{
    public class Promotion
    {
        public int PromotionId { get; set; }
        public string? PromotionName { get; set; }
        public decimal? DiscountPercent { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public bool? IsActive { get; set; }
        public DateTime? CreatedAt { get; set; }
        public DateTime? UpdatedAt { get; set; }
    }
}
