namespace InkMasterAPI.Models
{
    public class FengShuiDate
    {
        public int FengShuiDateId { get; set; }
        public DateTime DateRecommended { get; set; }
        public int? CustomerId { get; set; }
        public DateTime? CreatedAt { get; set; }
    }
}
