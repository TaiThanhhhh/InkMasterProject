using InkMasterAPI.Context;
using InkMasterAPI.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace InkMasterAPI.Service
{
    public class UserService
    {

        private readonly PasswordHasher<User> _passwordHasher;
        private readonly InkMasterDbContext _context;

        public UserService(InkMasterDbContext context)
        {
            _passwordHasher = new PasswordHasher<User>();
            _context = context;
        }

        public void RegisterUser(User user, string password)
        {
            // Hash mật khẩu trước khi lưu trữ
            user.PasswordHash = _passwordHasher.HashPassword(user, password);


            // Lưu thông tin người dùng (ví dụ: vào cơ sở dữ liệu)
            _context.SaveChanges();
        }

        public bool VerifyPassword(User user, string enteredPassword)
        {
            var result = _passwordHasher.VerifyHashedPassword(user, user.PasswordHash, enteredPassword);

            // Kiểm tra kết quả xác thực
            return result == PasswordVerificationResult.Success;
        }
    }
}
